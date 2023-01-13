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

namespace Hata.BLL.Impl.Services
{
    public class AnnouncementService : IAnnouncementService
    {
        private readonly IAnnouncementRepository _announcementRepository;
        private readonly IAnnouncementLocationPointsRepository _locationPointsRepository;
        private readonly IUpdateMapper<Announcement, AnnouncementModel> _announcementMapper;

        public AnnouncementService(IAnnouncementRepository announcementRepository, IAnnouncementLocationPointsRepository locationPointsRepository,
            IUpdateMapper<Announcement, AnnouncementModel> announcementMapper)
        {
            _announcementRepository = announcementRepository;
            _locationPointsRepository = locationPointsRepository;
            _announcementMapper = announcementMapper;
        }

        public async Task<Response<List<AnnouncementModel>>> GetAllAnnouncements()
        {
            try
            {
                var announcement = await _announcementRepository.GetAllAsync();
                return new Response<List<AnnouncementModel>>()
                {
                    Success = true,
                    Value = announcement.Select(_announcementMapper.Map).ToList(),
                };
            }
            catch (Exception ex)
            {
                return Response.OperationFailed<List<AnnouncementModel>>(ErrorCode.InternalError);
            }
        }

        public async Task<Response<List<AnnouncementModel>>> GetAnnouncementByUserId(Guid userId)
        {
            try
            {
                var announcement = await _announcementRepository.GetByAsync(x => x.UserId == userId);
                return new Response<List<AnnouncementModel>>()
                {
                    Success = true,
                    Value = announcement.Select(_announcementMapper.Map).ToList(),
                };
            }
            catch (Exception ex)
            {
                return Response.OperationFailed<List<AnnouncementModel>>(ErrorCode.InternalError);
            }
        }

        public async Task<Response> AddAnnouncement(AnnouncementRequest announcementRequest, Guid userId)
        {
            try
            {
                AnnouncementLocationPoints locationPoints = await _locationPointsRepository.AddAsync(announcementRequest.Location);
                Announcement announcement = new Announcement()
                {
                    UserId = userId,
                    Title = announcementRequest.Title,
                    Description = announcementRequest.Description,
                    AmountOfFlats = announcementRequest.AmountOfFlats,
                    AmountOfPeople = announcementRequest.AmountOfPeople,
                    IsActive = announcementRequest.IsActive,
                    LocationId = locationPoints.Id,
                    //ImageId = announcementRequest.ImageId,
                    PriceFrom = announcementRequest.PriceFrom,
                    PriceTo = announcementRequest.PriceTo,
                    StartDate = announcementRequest.StartDate,
                    EndDate = announcementRequest.EndDate
                };
                await _announcementRepository.AddAsync(announcement);
                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> UpdateAnnouncement(AnnouncementModel announcementModel)
        {
            try
            {
                Announcement announcement = await _announcementRepository.GetByIdAsync(announcementModel.Id);
                if (announcement == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (announcement.UserId != announcementModel.UserId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Response updateResponse = await _announcementRepository.UpdateAsync(_announcementMapper.MapBackInto(announcement, announcementModel));

                return updateResponse.Success ? Response.Successful() : Response.InternalError();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> DeleteAnnouncement(DeleteRequest deleteRequest, Guid userId)
        {
            try
            {
                Announcement announcement = await _announcementRepository.GetByIdAsync(deleteRequest.Id);
                if (announcement == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (announcement.UserId != userId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Announcement deleteResponse = await _announcementRepository.DeleteAsync(announcement);

                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }
    }
}
