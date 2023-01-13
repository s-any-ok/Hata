using System;
using System.ComponentModel;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace Hata.Models.Enums
{
    [JsonConverter(typeof(StringEnumConverter), typeof(SnakeCaseNamingStrategy))]
    public enum ErrorMessage
    {
        [HttpStatusCode(400)]
        [Description("The provided authorization grant or refresh token is " +
        "invalid, expired, revoked, does not match the redirection " +
        "URI used in the authorization request, or was issued to " +
        "another client.")]
        InvalidGrant,
        [HttpStatusCode(400)]
        [Description("The request is missing a required parameter")]
        InvalidRequest,
        [HttpStatusCode(401)]
        [Description("Client authentication failed")]
        InvalidClient,
        [HttpStatusCode(401)]
        [Description(" The authenticated client is not authorized to use this " +
        "authorization grant type.")]
        UnauthorizedClient,
        [HttpStatusCode(400)]
        [Description(" The authorization grant type is not supported by the " +
        "authorization server.")]
        UnsupportedGrantType,
        [HttpStatusCode(400)]
        [Description("The requested scope is invalid, unknown, malformed, or " +
        "exceeds the scope granted by the resource owner.")]
        InvalidScope,
        [Description("User with this email is already registered")]
        [HttpStatusCode(401)]
        EmailIsAlreadyInUse,
        [Description("Server error")]
        [HttpStatusCode(500)]
        ServerError,
        [Description("Invalid username or password")]
        InvalidUserNameAndPassword,
        [Description("The specified user cannot sign in.")]
        UserCanNotSignIn,
        [Description("The refresh token is no longer valid.")]
        RefreshTokenNotValid,
    }

    public class HttpStatusCodeAttribute : Attribute
    {
        public int StatusCode { get; }

        public HttpStatusCodeAttribute(int statusCode)
        {
            StatusCode = statusCode;
        }
    }
}
