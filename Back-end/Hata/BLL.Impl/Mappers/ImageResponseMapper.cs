using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models.Responses;

namespace Hata.BLL.Impl.Mappers
{
    public class ImageResponseMapper : IMapper<Image, ImageResponse>
    {
        public ImageResponse Map(Image ent)
        {
            return new ImageResponse()
            {
                ImageName = ent.ImageName,
                ImageFile = ent.ImageFile,
                ImageSrc = ent.ImageSrc,
            };
        }
    }
}
