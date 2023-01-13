using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.BLL.Abstract.IServices;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;
using Hata.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Hata.Controllers.API
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SocialController : ControllerBase
    {
        private readonly ISocialService _socialService;

        public SocialController(ISocialService socialService)
        {
            _socialService = socialService;
        }

        [HttpGet("getByUserId")]
        public async Task<Response<List<SocialModel>>> GetSocialByUserId(GetRequest model)
        {
            Guid userId = model.Id;
            return await _socialService.GetSocialByUserId(userId);
        }

        [HttpPost("create")]
        public async Task<Response> AddSocial(SocialRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _socialService.AddSocial(model, userId);
        }

        [HttpPut("update")]
        public async Task<Response> UpdateSocial(SocialModel model)
        {
            Guid userId = HttpContext.GetContextUserId();
            model.UserId = userId;
            return await _socialService.UpdateSocial(model);
        }

        [HttpDelete("delete")]
        public async Task<Response> DeleteSocial(DeleteRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _socialService.DeleteSocial(model, userId);
        }
    }
}