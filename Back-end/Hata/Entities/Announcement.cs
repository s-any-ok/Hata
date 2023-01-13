using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hata.Entities
{
    public class Announcement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public int AmountOfFlats { get; set; }
        public int AmountOfPeople { get; set; }

        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }

        public List<Image> Images { get; set; } = new List<Image>();
        public Guid? LocationId { get; set; }
        public AnnouncementLocationPoints Location { get; set; }

        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
        
    }
}
