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
    public class RespondAnnouncementService : IRespondAnnouncementService
    {
        private readonly IRespondAnnouncementRepository _respondAnnouncementRepository;
        private readonly IUpdateMapper<RespondAnnouncement, RespondAnnouncementModel> _respondAnnouncementMapper;
        private readonly IMapper<RespondAnnouncement, RespondAnnouncementResponse> _respondAnnouncementResponseMapper;

        public RespondAnnouncementService(
            IRespondAnnouncementRepository respondAnnouncementRepository,
            IUpdateMapper<RespondAnnouncement, RespondAnnouncementModel> respondAnnouncementMapper,
            IMapper<RespondAnnouncement, RespondAnnouncementResponse> respondAnnouncementResponseMapper
        )
        {
            _respondAnnouncementRepository = respondAnnouncementRepository;
            _respondAnnouncementMapper = respondAnnouncementMapper;
            _respondAnnouncementResponseMapper = respondAnnouncementResponseMapper;
        }

        public async Task<Response<List<RespondAnnouncementResponse>>> GetRespondAnnouncementsByUserId(Guid userId)
        {
            try
            {
                var respondAnnouncement = await _respondAnnouncementRepository.GetRespondAnnouncement(userId);
                return new Response<List<RespondAnnouncementResponse>>()
                {
                    Success = true,
                    Value = respondAnnouncement.Select(_respondAnnouncementResponseMapper.Map).ToList(),
                };
            }
            catch (Exception ex)
            {
                return Response.OperationFailed<List<RespondAnnouncementResponse>>(ErrorCode.InternalError);
            }
        }

        public async Task<Response> AddRespondAnnouncement(RespondAnnouncementRequest respondAnnouncementRequest, Guid userId)
        {
            try
            {
                RespondAnnouncement announcement = await _respondAnnouncementRepository.AddAsync(new RespondAnnouncement()
                {
                    UserId = userId,
                    AnnouncementId = respondAnnouncementRequest.Id,
                    Comment = respondAnnouncementRequest.Comment
                });
                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> UpdateRespondAnnouncement(RespondAnnouncementModel respondAnnouncementModel, Guid userId)
        {
            try
            {
                RespondAnnouncement respondAnnouncement = await _respondAnnouncementRepository.GetByIdAsync(respondAnnouncementModel.Id);
                if (respondAnnouncement == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (respondAnnouncement.UserId != userId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Response updateResponse = await _respondAnnouncementRepository.UpdateAsync(_respondAnnouncementMapper.MapBackInto(respondAnnouncement, respondAnnouncementModel));

                return updateResponse.Success ? Response.Successful() : Response.InternalError();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> DeleteRespondAnnouncement(DeleteRequest deleteRequest, Guid userId)
        {
            try
            {
                RespondAnnouncement respondAnnouncement = await _respondAnnouncementRepository.GetByIdAsync(deleteRequest.Id);
                if (respondAnnouncement == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (respondAnnouncement.UserId != userId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                RespondAnnouncement deleteResponse = await _respondAnnouncementRepository.DeleteAsync(respondAnnouncement);

                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }
    }
}
