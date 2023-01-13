using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;
using Hata.Models.Responses;

namespace Hata.BLL.Abstract.IServices
{
    public interface IRespondAnnouncementService
    {
        Task<Response> AddRespondAnnouncement(RespondAnnouncementRequest respondAnnouncementRequest, Guid userId);
        Task<Response> DeleteRespondAnnouncement(DeleteRequest deleteRequest, Guid userId);
        Task<Response> UpdateRespondAnnouncement(RespondAnnouncementModel respondAnnouncementModel, Guid userId);
        Task<Response<List<RespondAnnouncementResponse>>> GetRespondAnnouncementsByUserId(Guid userId);
    }
}
