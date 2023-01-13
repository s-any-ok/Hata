using Hata.Entities.Enums;
using Hata.Models.Responses;
using System;

namespace Hata.Models.Requests.Auth
{
    public class AuthenticateResponse
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string University { get; set; }
        public string Faculty { get; set; }
        public int Course { get; set; }
        public string Bio { get; set; }
        public DateTime BirthDay { get; set; }
        public GenderType GenderType { get; set; }
        public Guid? ImageId { get; set; }
        public Guid? LocationId { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(UserMainInfoResponse user, string token)
        {
            UserName = user.UserName;
            Email = user.Email;
            University = user.University;
            Faculty = user.Faculty;
            Course = user.Course;
            Bio = user.Bio;
            BirthDay = user.BirthDay;
            GenderType = user.GenderType;
            Token = token;
        }
    }
}
