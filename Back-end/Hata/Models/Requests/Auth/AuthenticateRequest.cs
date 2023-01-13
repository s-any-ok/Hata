using System.ComponentModel.DataAnnotations;

namespace Hata.Models.Requests.Auth
{
    public class AuthenticateRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

    }
}
