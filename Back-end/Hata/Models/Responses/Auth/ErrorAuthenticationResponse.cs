using Hata.Models.Enums;
using Newtonsoft.Json;

namespace Hata.Models.Responses.Auth
{
    public class ErrorAuthenticationResponse : IAuthenticationResponse
    {
        [JsonProperty("error")]
        public ErrorMessage Error { get; set; }

        [JsonProperty("error_description")]
        public string ErrorDescription { get; set; }

    }
}
