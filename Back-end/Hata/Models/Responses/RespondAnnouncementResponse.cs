using Hata.Entities;
using System;

namespace Hata.Models.Responses
{
    public class RespondAnnouncementResponse
    {
        public Guid Id { get; set; }
        public Announcement Announcement { get; set; }
        public string Comment { get; set; }
    }
}
