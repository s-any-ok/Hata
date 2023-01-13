using System;
using Hata.Entities.Enums;

namespace Hata.Models
{
    public class UserModel
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public bool EmailConfirmed { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public bool LockoutEnabled { get; set; }
        public string University { get; set; }
        public string Faculty { get; set; }
        public int Course { get; set; }
        public string Bio { get; set; }
        public DateTime BirthDay { get; set; }
        public GenderType GenderType { get; set; }
        public DateTimeOffset JoinedDate { get; set; }
        public Guid? ImageId { get; set; }
        public Guid? LocationId { get; set; }
    }
}
