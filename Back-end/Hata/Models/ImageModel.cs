using System;

namespace Hata.Models
{
    public class ImageModel
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public string ContentType { get; set; }
        public DateTimeOffset DateChanged { get; set; }
        public bool IsPrivatePhoto { get; set; }
    }
}
