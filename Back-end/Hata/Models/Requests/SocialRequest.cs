using Hata.Entities.Enums;

namespace Hata.Models.Requests
{
    public class SocialRequest
    {
        public SocialType SocialType { get; set; }
        public string Link { get; set; }
    }
}
