using AspNet.Security.OpenIdConnect.Primitives;

namespace Hata.Models.Responses.Auth
{
    public class ValidationOpenIdConnectResponse : OpenIdConnectResponse
    {
        /// <summary>
        /// Gets or sets the "lockout_end_time" parameter when failed
        /// attempts count exceeded and user is locked out.
        /// </summary>
        /// <param name="'lockout_end_time'">The time in seconds after which user can try to log in again.</param>
        public long LockoutEndTime
        {
            get => (long)this.GetParameter("lockout_end_time");
            set => this.SetParameter("lockout_end_time", new OpenIdConnectParameter?((OpenIdConnectParameter)value));
        }
    }
}
