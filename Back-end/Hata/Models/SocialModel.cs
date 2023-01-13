using System;
using Hata.Entities;
using Hata.Entities.Enums;

namespace Hata.Models
{
    public class SocialModel
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public SocialType SocialType { get; set; }
        public string Link { get; set; }
    }
}
