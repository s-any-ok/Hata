using System;
using Microsoft.AspNetCore.Http;

namespace Hata.Models
{
    public class SaveOrUpdateImageModel
    {
        public Guid? ImageId { get; set; }
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
        public string ImageSrc { get; set;}
    }
}
