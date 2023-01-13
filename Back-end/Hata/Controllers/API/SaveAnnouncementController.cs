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
    public class SaveAnnouncementController : ControllerBase
    {
        private readonly ISaveAnnouncementService _saveAnnouncementService;

        public SaveAnnouncementController(ISaveAnnouncementService saveAnnouncementService)
        {
            _saveAnnouncementService = saveAnnouncementService;
        }

        [HttpGet("getByUserId")]
        public async Task<Response<List<SaveAnnouncementResponse>>> GetSaveAnnouncementByUserId(GetRequest model)
        {
            Guid userId = model.Id;
            return await _saveAnnouncementService.GetSaveAnnouncementByUserId(userId);
        }

        [HttpPost("create")]
        public async Task<Response> AddSaveAnnouncement(GetRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _saveAnnouncementService.AddSaveAnnouncement(model, userId);
        }

        [HttpDelete("delete")]
        public async Task<Response> DeleteAnnouncement(DeleteRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _saveAnnouncementService.DeleteSaveAnnouncement(model, userId);
        }
    }
}