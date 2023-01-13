using Microsoft.AspNetCore.Http;

namespace Hata.Models.Responses
{
    public class ImageResponse
    {
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
        public string ImageSrc { get; set; }
    }
}
