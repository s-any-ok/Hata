using System.ComponentModel.DataAnnotations;

namespace Hata.Models.Requests.Auth
{
    public class ResetPasswordRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string NewPassword { get; set; }
    }
}
