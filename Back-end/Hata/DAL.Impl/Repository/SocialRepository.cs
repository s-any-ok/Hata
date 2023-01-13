using System;
using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;

namespace Hata.DAL.Impl.Repository
{
    public class SocialRepository : GenericKeyRepository<Guid, Social, HataDbContext>, ISocialRepository
    {
        public SocialRepository(HataDbContext context) : base(context)
        {

        }
    }
}
