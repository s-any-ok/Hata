using System;
using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;

namespace Hata.DAL.Impl.Repository
{
    public class AnnouncementLocationPointsRepository : GenericKeyRepository<Guid, AnnouncementLocationPoints, HataDbContext>, IAnnouncementLocationPointsRepository
    {
        public AnnouncementLocationPointsRepository(HataDbContext context) : base(context)
        {

        }
    }
}
