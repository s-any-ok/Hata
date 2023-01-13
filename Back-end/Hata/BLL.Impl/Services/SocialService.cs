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
    public class SocialService : ISocialService
    {
        private readonly ISocialRepository _socialRepository;
        private readonly IUpdateMapper<Social, SocialModel> _socialMapper;

        public SocialService(ISocialRepository socialRepository, IUpdateMapper<Social, SocialModel> socialMapper)
        {
            _socialRepository = socialRepository;
            _socialMapper = socialMapper;
        }

        public async Task<Response<List<SocialModel>>> GetSocialByUserId(Guid userId)
        {
            try
            {
                var social = await _socialRepository.GetByAsync(x => x.UserId == userId);
                return new Response<List<SocialModel>>()
                {
                    Success = true,
                    Value = social.Select(_socialMapper.Map).ToList(),
                };
            }
            catch (Exception ex)
            {
                return Response.OperationFailed<List<SocialModel>>(ErrorCode.InternalError);
            }
        }

        public async Task<Response> AddSocial(SocialRequest socialRequest, Guid userId)
        {
            try
            {
                Social social = await _socialRepository.AddAsync(new Social()
                {
                    UserId = userId,
                    Link = socialRequest.Link,
                    SocialType = socialRequest.SocialType,
                });
                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> UpdateSocial(SocialModel socialModel)
        {
            try
            {
                Social social = await _socialRepository.GetByIdAsync(socialModel.Id);
                if (social == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (social.UserId != socialModel.UserId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Response updateResponse = await _socialRepository.UpdateAsync(_socialMapper.MapBackInto(social, socialModel));

                return updateResponse.Success ? Response.Successful() : Response.InternalError();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> DeleteSocial(DeleteRequest deleteRequest, Guid userId)
        {
            try
            {
                Social social = await _socialRepository.GetByIdAsync(deleteRequest.Id);
                if (social == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (social.UserId != userId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Social deleteResponse = await _socialRepository.DeleteAsync(social);

                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }
    }
}
