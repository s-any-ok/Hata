using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Hata.Entities.Enums;
using Microsoft.AspNetCore.Identity;

namespace Hata.Entities
{
    public class User : IdentityUser<Guid>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public override Guid Id
        {
            get { return base.Id; }
            set { base.Id = value; }
        }
        public string University { get; set; }
        public string Faculty { get; set; }
        public int Course { get; set; }
        public string Bio { get; set; }
        public DateTime BirthDay { get; set; }
        public GenderType GenderType { get; set; }
        public DateTimeOffset JoinedDate { get; set; }
        public Guid? ImageId { get; set; }
        public Image Image { get; set; }
        
        public Guid? LocationId { get; set; }
        public LocationPoints Location { get; set; }
    }
}
