using Hata.Entities;
using System;

namespace Hata.Models.Requests
{
    public class AnnouncementRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public int AmountOfFlats { get; set; }
        public int AmountOfPeople { get; set; }

        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }

        public Guid? ImageId { get; set; }
        public AnnouncementLocationPoints Location { get; set; }

        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
        
    }
}
