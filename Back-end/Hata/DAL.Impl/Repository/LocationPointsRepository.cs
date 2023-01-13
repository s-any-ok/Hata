using System;
using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;

namespace Hata.DAL.Impl.Repository
{
    public class LocationPointsRepository : GenericKeyRepository<Guid, LocationPoints, HataDbContext>, ILocationPointsRepository
    {
        public LocationPointsRepository(HataDbContext context) : base(context)
        {

        }
    }
}
