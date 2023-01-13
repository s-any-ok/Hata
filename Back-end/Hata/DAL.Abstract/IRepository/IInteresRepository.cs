using Hata.DAL.Abstract.IRepository.Base;
using Hata.Entities;
using System;

namespace Hata.DAL.Abstract.IRepository
{
    public interface IInteresRepository : IGenericKeyRepository<Guid, Interes>
    {
    }
}
