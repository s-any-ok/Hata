using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.BLL.Abstract.IServices;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;
using Hata.Models.Responses;
using Hata.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Hata.Controllers.API
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class RespondAnnouncementController : ControllerBase
    {
        private readonly IRespondAnnouncementService _respondAnnouncementService;

        public RespondAnnouncementController(IRespondAnnouncementService respondAnnouncementService)
        {
            _respondAnnouncementService = respondAnnouncementService;
        }

        [HttpGet("getByUserId")]
        public async Task<Response<List<RespondAnnouncementResponse>>> GetRespondAnnouncementsByUserId(GetRequest model)
        {
            Guid userId = model.Id;
            return await _respondAnnouncementService.GetRespondAnnouncementsByUserId(userId);
        }

        [HttpPost("create")]
        public async Task<Response> AddRespondAnnouncement(RespondAnnouncementRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _respondAnnouncementService.AddRespondAnnouncement(model, userId);
        }

        [HttpPut("update")]
        public async Task<Response> UpdateAnnouncement(RespondAnnouncementModel model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _respondAnnouncementService.UpdateRespondAnnouncement(model, userId);
        }

        [HttpDelete("delete")]
        public async Task<Response> DeleteAnnouncement(DeleteRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _respondAnnouncementService.DeleteRespondAnnouncement(model, userId);
        }
    }
}