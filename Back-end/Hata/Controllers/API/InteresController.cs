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
    public class InteresController : ControllerBase
    {
        private readonly IInteresService _interesService;

        public InteresController(IInteresService interesService)
        {
            _interesService = interesService;
        }

        [HttpGet("getByUserId")]
        public async Task<Response<List<InteresModel>>> GetInteresByUserId(GetRequest model)
        {
            Guid userId = model.Id;
            return await _interesService.GetInteresByUserId(userId);
        }

        [HttpPost("create")]
        public async Task<Response> AddInteres(InteresRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _interesService.AddInteres(model, userId);
        }

        [HttpPut("update")]
        public async Task<Response> UpdateInteres(InteresModel model)
        {
            Guid userId = HttpContext.GetContextUserId();
            model.UserId = userId;
            return await _interesService.UpdateInteres(model);
        }

        [HttpDelete("delete")]
        public async Task<Response> DeleteInteres(DeleteRequest model)
        {
            Guid userId = HttpContext.GetContextUserId();
            return await _interesService.DeleteInteres(model, userId);
        }
    }
}