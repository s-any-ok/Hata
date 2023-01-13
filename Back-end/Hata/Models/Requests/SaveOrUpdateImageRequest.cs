using Microsoft.AspNetCore.Http;
using System;

namespace Hata.Models.Requests
{
    public class SaveOrUpdateImageRequest
    {
        public Guid? ImageId { get; set; }
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
        public string ImageSrc { get; set; }
    }
}
