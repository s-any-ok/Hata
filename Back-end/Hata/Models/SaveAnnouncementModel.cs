using System;
using Hata.Entities;
using Hata.Models.Requests;

namespace Hata.Models
{
    public class SaveAnnouncementModel
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public Guid AnnouncementId { get; set; }
        public AnnouncementRequest Announcement { get; set; }
    }
}
