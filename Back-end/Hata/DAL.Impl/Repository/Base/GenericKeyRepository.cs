using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository.Base;
using Hata.Models.ApiWrapper;
using Hata.Models.Enums;
using Microsoft.EntityFrameworkCore;

namespace Hata.DAL.Impl.Repository.Base
{
    public abstract class GenericKeyRepository<TKey, TEntity, TContext> : IGenericKeyRepository<TKey, TEntity>
        where TEntity : class
        where TContext : DbContext
    {
        public GenericKeyRepository(TContext context)
        {
            Context = context;
        }

        public TContext Context { get; }

        public DbSet<TEntity> DbSet => Context.Set<TEntity>();

        public virtual async Task<TEntity> AddAsync(TEntity entity)
        {
            var item = await Context.Set<TEntity>().AddAsync(entity);
            await Context.SaveChangesAsync();
            return item.Entity;
        }

        public virtual async Task<Response> UpdateAsync(TEntity entity)
        {
            try
            {
                Context.Entry(entity).State = EntityState.Modified;
                await Context.SaveChangesAsync();

                return new Response
                {
                    Success = true,
                };
            }
            catch (DbUpdateConcurrencyException dbException)
            {
                if (dbException.Message.Contains("Database operation expected to affect")
                    && dbException.Message.Contains("row(s)"))
                {
                    return new Response
                    {
                        Success = false,
                        Error = new ApiError
                        {
                            ErrorCode = ErrorCode.NotFound,
                        },
                    };
                }

                throw;
            }
            catch (DbUpdateException dbException)
            {
                if (dbException.InnerException != null)
                {
                    //Postgres generated error
                    //Sql State 23505 a unique value constraint is violated
                    if ((string)dbException.InnerException.Data["SqlState"] == "23505")
                    {
                        return new Response<TEntity>
                        {
                            Success = false,
                            Error = new ApiError
                            {
                                ErrorCode = ErrorCode.UniquenessError,
                            },
                        };
                    }
                }

                throw;
            }
        }

        public async Task UpsertAsync(TEntity value)
        {
            var entry = Context.Entry(value);
            //TODO как-то это больно незаоптимизировано выглядит!   Может таки создать базовый интерфейс для сущнсотей?
            var key = entry.Metadata
                .FindPrimaryKey()
                .Properties
                .Select(prop => entry.Property(prop.Name).CurrentValue)
                .ToArray();

            var valueInDb = await DbSet.FindAsync(key);
            if (valueInDb != null)
            {
                var existingEntry = Context.Entry(valueInDb);
                existingEntry.State = EntityState.Detached;
                await UpdateAsync(value);
            }
            else
            {
                await AddAsync(value);
            }

            await Context.SaveChangesAsync();
        }

        public virtual async Task<TEntity> DeleteAsync(TEntity entity)
        {
            TEntity result = Context.Set<TEntity>()
                .Remove(entity).Entity;
            await Context.SaveChangesAsync();

            return result;
        }

        public virtual async Task<List<TEntity>> GetAllAsync()
        {
            return await Context.Set<TEntity>().ToListAsync();
        }

        public virtual async Task<List<TEntity>> GetByAsync
            (Expression<Func<TEntity, bool>> predicate)
        {
            return await Context.Set<TEntity>().Where(predicate).ToListAsync();
        }

        public virtual async Task<TEntity> GetByIdAsync(TKey id)
        {
            return await Context.Set<TEntity>()
                .FindAsync(id);
        }


        public virtual async Task<int> GetCountAsync()
        {
            return await Context.Set<TEntity>().CountAsync();
        }

        public virtual async Task<int> GetCountAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await Context.Set<TEntity>().Where(predicate).CountAsync();
        }

        public virtual async Task<List<TEntity>> FetchByAsync
            (Expression<Func<TEntity, bool>> predicate)
        {
            return await Context.Set<TEntity>().Where(predicate)
                .ToListAsync();
        }

        public virtual async Task<TEntity> FirstOrDefaultAsync
            (Expression<Func<TEntity, bool>> predicate)
        {
            return await Context.Set<TEntity>().FirstOrDefaultAsync(predicate);
        }
    }
}
