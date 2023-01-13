using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;
using System;

namespace Hata.DAL.Impl.Repository
{
    public class InteresRepository : GenericKeyRepository<Guid, Interes, HataDbContext>, IInteresRepository
    {
        public InteresRepository(HataDbContext context) : base(context)
        {

        }
    }
}
