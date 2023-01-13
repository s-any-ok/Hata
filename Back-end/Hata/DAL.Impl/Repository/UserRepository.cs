using System;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;
using Microsoft.EntityFrameworkCore;

namespace Hata.DAL.Impl.Repository
{
    public class UserRepository : GenericKeyRepository<Guid, User, HataDbContext>, IUserRepository
    {
        public UserRepository(HataDbContext context) : base(context)
        {

        }

        public async Task<User> GetByUserName(string userName)
        {
            return await Context.Users.FirstOrDefaultAsync(x => x.UserName == userName);
        }
    }
}
