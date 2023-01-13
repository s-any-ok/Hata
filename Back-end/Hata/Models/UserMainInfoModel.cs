using System;
using Hata.Entities;
using Hata.Entities.Enums;

namespace Hata.Models
{
    public class UserMainInfoModel
    {
        public Guid Id { get; set; }
        public string University { get; set; }
        public string Faculty { get; set; }
        public int Course { get; set; }
        public string Bio { get; set; }
        public DateTime BirthDay { get; set; }
        public GenderType GenderType { get; set; }
        public DateTimeOffset JoinedDate { get; set; }
    }
}
