using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.JsonWebTokens;

namespace Hata.Utils
{
    public static class AuthHelper
    {
        public static Guid GetClUserId(this ClaimsPrincipal principal)
        {
            string userId = ArgValidationUtil.FailIfNull(
                principal.FindFirstValue(JwtRegisteredClaimNames.Sub),
                nameof(userId)
            );

            var userIdGuid = Guid.Parse(userId);
            return userIdGuid;
        }

        public static Guid GetContextUserId(this HttpContext principal)
        {
            var userId = principal.Items["UserId"].ToString();
            var userIdGuid = Guid.Parse(userId);
            return userIdGuid;
        }
    }
}
