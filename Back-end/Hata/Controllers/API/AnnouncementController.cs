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
    [ApiController]
    [Route("api/[controller]")]
    public class AnnouncementController : ControllerBase
    {
        private readonly IAnnouncementService _announcementService;

        public AnnouncementController(IAnnouncementService announcementService)
        {
            _announcementService = announcementService;
        }

        [HttpGet("getAll")]
        public async Task<Response<List<AnnouncementModel>>> GetAllAnnouncements()
        {
            return await _announcementService.GetAllAnnouncements();
        }

        [HttpGet("getByUserId")]
        public async Task<Response<List<AnnouncementModel>>> GetAnnouncementByUserId(GetRequest model)
        {
            Guid userId = model.Id;
            return await _announcementService.GetAnnouncementByUserId(userId);
        }
        [Authorize]
        [HttpGet("getUserAnnouncements")]
        public async Task<Response<List<AnnouncementModel>>> GetUserAnnouncements()
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _announcementService.GetAnnouncementByUserId(userId);
        }

        [Authorize]
        [HttpPost("create")]
        public async Task<Response> AddAnnouncement(AnnouncementRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _announcementService.AddAnnouncement(model, userId);
        }
        [Authorize]
        [HttpPut("update")]
        public async Task<Response> UpdateAnnouncement(AnnouncementModel model)
        {
            Guid userId = HttpContext.GetContextUserId();
            model.UserId = userId;
            return await _announcementService.UpdateAnnouncement(model);
        }
        [Authorize]
        [HttpDelete("delete")]
        public async Task<Response> DeleteAnnouncement(DeleteRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _announcementService.DeleteAnnouncement(model, userId);
        }
    }
}