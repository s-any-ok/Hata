using Hata.Entities;
using System;

namespace Hata.Models.Responses
{
    public class SaveAnnouncementResponse
    {
        public Guid Id { get; set; }
        public Announcement Announcement { get; set; }
    }
}
