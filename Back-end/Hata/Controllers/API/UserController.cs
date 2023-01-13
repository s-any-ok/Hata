using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Hata.BLL.Abstract.IServices;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;
using Hata.Models.Requests.Auth;
using Hata.Models.Responses;
using Hata.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Hata.Controllers.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public async Task<Response> Authenticate(AuthenticateRequest model)
        {
            return await _userService.Authenticate(model);
        }

        [HttpPost("register")]
        public async Task<Response> Register(AuthenticateRequest model)
        {
            return await _userService.Register(model);
        }

        [Authorize]
        [HttpGet("getMainInfo")]
        public async Task<Response<UserMainInfoResponse>> GetMainInfo()
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _userService.GetUserMainInfo(userId);
        }

        [Authorize]
        [HttpPost("setMainInfo")]
        public async Task<Response> SetMainInfo(UserMainInfoRequest userMainInfoRequest)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _userService.SetUserMainInfo(userMainInfoRequest, userId);
        }

        [Authorize]
        [HttpGet("getPhoto")]
        public async Task<Response<ImageResponse>> GetPhoto()
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _userService.GetPhoto(userId);
        }

        [Authorize]
        [HttpPost("updatePhoto")]
        public async Task<Response> UpdatePhoto(SaveOrUpdateImageRequest saveOrUpdateImageRequest)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _userService.UpdatePhoto(saveOrUpdateImageRequest, userId);
        }

        [Authorize]
        [HttpGet("deletePhoto")]
        public async Task<Response> DeletePhoto()
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _userService.DeletePhoto(userId);
        }
    }
}