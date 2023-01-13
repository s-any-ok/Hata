using System;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository.Base;
using Hata.Entities;

namespace Hata.DAL.Abstract.IRepository
{
    public interface IUserRepository : IGenericKeyRepository<Guid, User>
    {
        Task<User> GetByUserName(string userName);
    }
}
