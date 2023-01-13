using System;
using System.Collections.Generic;
using Hata.Entities;

namespace Hata.Models
{
    public class AnnouncementModel
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public int AmountOfFlats { get; set; }
        public int AmountOfPeople { get; set; }

        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }

        public List<Image> Images { get; set; }
        public AnnouncementLocationPoints Location { get; set; }

        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
        
    }
}
