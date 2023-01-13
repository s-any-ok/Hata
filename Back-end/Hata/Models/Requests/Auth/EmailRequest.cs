using System.ComponentModel.DataAnnotations;

namespace Hata.Models.Requests.Auth
{
    public class EmailRequest
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
