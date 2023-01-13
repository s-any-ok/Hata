using System;
using Hata.Entities.Enums;

namespace Hata.Models.Responses
{
    public class UserMainInfoResponse
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string University { get; set; }
        public string Faculty { get; set; }
        public int Course { get; set; }
        public string Bio { get; set; }
        public DateTime BirthDay { get; set; }
        public GenderType GenderType { get; set; }
    }
}
