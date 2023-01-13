using System;
using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;

namespace Hata.DAL.Impl.Repository
{
    public class ImageRepository : GenericKeyRepository<Guid, Image, HataDbContext>, IImageRepository
    {
        public ImageRepository(HataDbContext context) : base(context)
        {

        }
    }
}
