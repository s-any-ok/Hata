using System;

namespace Hata.Models.Requests
{
    public class RespondAnnouncementRequest
    {
        public Guid Id { get; set; }
        public string Comment { get; set; }
    }
}
