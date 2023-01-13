using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;
using Hata.Models.Responses;

namespace Hata.BLL.Abstract.IServices
{
    public interface ISaveAnnouncementService
    {
        Task<Response> AddSaveAnnouncement(GetRequest getRequest, Guid userId);
        Task<Response> DeleteSaveAnnouncement(DeleteRequest deleteRequest, Guid userId);
        Task<Response<List<SaveAnnouncementResponse>>> GetSaveAnnouncementByUserId(Guid userId);
    }
}
