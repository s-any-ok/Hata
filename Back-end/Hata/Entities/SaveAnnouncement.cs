using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hata.Entities
{
    public class SaveAnnouncement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        public Guid AnnouncementId { get; set; }
        [ForeignKey(nameof(AnnouncementId))]
        public Announcement Announcement { get; set; }
    }
}
