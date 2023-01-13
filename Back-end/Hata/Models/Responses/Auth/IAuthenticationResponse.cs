using Newtonsoft.Json;

namespace Hata.Models.Responses.Auth
{
    public interface IAuthenticationResponse
    {

    }

    public class StatusCodeResponse : IAuthenticationResponse
    {
        [JsonIgnore]
        public int StatusCode { get; set; }
    }
}
