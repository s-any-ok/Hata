using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;

namespace Hata.BLL.Abstract.IServices
{
    public interface IAnnouncementService
    {
        Task<Response> AddAnnouncement(AnnouncementRequest announcementRequest, Guid userId);
        Task<Response> DeleteAnnouncement(DeleteRequest deleteRequest, Guid userId);
        Task<Response> UpdateAnnouncement(AnnouncementModel announcementModel);
        Task<Response<List<AnnouncementModel>>> GetAllAnnouncements();
        Task<Response<List<AnnouncementModel>>> GetAnnouncementByUserId(Guid userId);
        ///Task<Response> SaveOrUpdateAnnouncementPhoto(SaveOrUpdateImageRequest saveOrUpdatePhotoRequest, Guid userId);
    }
}
