using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hata.BLL.Abstract.IMapper;
using Hata.BLL.Abstract.IServices;
using Hata.DAL.Abstract.IRepository;
using Hata.Entities;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Enums;
using Hata.Models.Requests;
using Hata.Models.Responses;

namespace Hata.BLL.Impl.Services
{
    public class SaveAnnouncementService : ISaveAnnouncementService
    {
        private readonly ISaveAnnouncementRepository _saveAnnouncementRepository;
        private readonly IUpdateMapper<SaveAnnouncement, SaveAnnouncementModel> _saveAnnouncementMapper;
        private readonly IMapper<SaveAnnouncement, SaveAnnouncementResponse> _saveAnnouncementResponseMapper;

        public SaveAnnouncementService(
            ISaveAnnouncementRepository saveAnnouncementRepository, 
            IUpdateMapper<SaveAnnouncement, SaveAnnouncementModel> saveAnnouncementMapper,
            IMapper<SaveAnnouncement, SaveAnnouncementResponse> saveAnnouncementResponseMapper
            )
        {
            _saveAnnouncementRepository = saveAnnouncementRepository;
            _saveAnnouncementMapper = saveAnnouncementMapper;
            _saveAnnouncementResponseMapper = saveAnnouncementResponseMapper;
        }

        public async Task<Response<List<SaveAnnouncementResponse>>> GetSaveAnnouncementByUserId(Guid userId)
        {
            try
            {
                var saveAnnouncement = await _saveAnnouncementRepository.GetSaveAnnouncement(userId);
                return new Response<List<SaveAnnouncementResponse>>()
                {
                    Success = true,
                    Value = saveAnnouncement.Select(_saveAnnouncementResponseMapper.Map).ToList(),
                };
            }
            catch (Exception ex)
            {
                return Response.OperationFailed<List<SaveAnnouncementResponse>>(ErrorCode.InternalError);
            }
        }

        public async Task<Response> AddSaveAnnouncement(GetRequest getRequest, Guid userId)
        {
            try
            {
                SaveAnnouncement announcement = await _saveAnnouncementRepository.AddAsync(new SaveAnnouncement()
                {
                    UserId = userId,
                    AnnouncementId = getRequest.Id,
                });
                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> UpdateSaveAnnouncement(SaveAnnouncementModel saveAnnouncementModel)
        {
            try
            {
                SaveAnnouncement announcement = await _saveAnnouncementRepository.GetByIdAsync(saveAnnouncementModel.Id);
                if (announcement == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (announcement.UserId != saveAnnouncementModel.UserId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Response updateResponse = await _saveAnnouncementRepository.UpdateAsync(_saveAnnouncementMapper.MapBackInto(announcement, saveAnnouncementModel));

                return updateResponse.Success ? Response.Successful() : Response.InternalError();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> DeleteSaveAnnouncement(DeleteRequest deleteRequest, Guid userId)
        {
            try
            {
                SaveAnnouncement announcement = await _saveAnnouncementRepository.GetByIdAsync(deleteRequest.Id);
                if (announcement == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (announcement.UserId != userId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                SaveAnnouncement deleteResponse = await _saveAnnouncementRepository.DeleteAsync(announcement);

                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }
    }
}
