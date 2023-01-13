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
    public class InteresService : IInteresService
    {
        private readonly IInteresRepository _interesRepository;
        private readonly IUpdateMapper<Interes, InteresModel> _interesMapper;

        public InteresService(IInteresRepository interesRepository, IUpdateMapper<Interes, InteresModel> interesMapper)
        {
            _interesRepository = interesRepository;
            _interesMapper = interesMapper;
        }

        public async Task<Response<List<InteresModel>>> GetInteresByUserId(Guid userId)
        {
            try
            {
                var interes = await _interesRepository.GetByAsync(x => x.UserId == userId);
                return new Response<List<InteresModel>>()
                {
                    Success = true,
                    Value = interes.Select(_interesMapper.Map).ToList(),
                };
            }
            catch (Exception ex)
            {
                return Response.OperationFailed<List<InteresModel>>(ErrorCode.InternalError);
            }
        }
        public async Task<Response> AddInteres(InteresRequest request, Guid userId)
        {
            try
            {
                Interes interes = await _interesRepository.AddAsync(new Interes()
                {
                    UserId = userId,
                    InteresType = request.InteresType
                });
                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> UpdateInteres(InteresModel interesModel)
        {
            try
            {
                Interes interes = await _interesRepository.GetByIdAsync(interesModel.Id);
                if (interes == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (interes.UserId != interesModel.UserId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Response updateResponse = await _interesRepository.UpdateAsync(_interesMapper.MapBackInto(interes, interesModel));

                return updateResponse.Success ? Response.Successful() : Response.InternalError();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }

        public async Task<Response> DeleteInteres(DeleteRequest deleteRequest, Guid userId)
        {
            try
            {
                Interes interes = await _interesRepository.GetByIdAsync(deleteRequest.Id);
                if (interes == null)
                {
                    return Response.OperationFailed(ErrorCode.NotFound);
                }

                if (interes.UserId != userId)
                {
                    return Response.OperationFailed(ErrorCode.AccessDenied);
                }

                Interes deleteResponse = await _interesRepository.DeleteAsync(interes);

                return Response.Successful();
            }
            catch (Exception ex)
            {
                return Response.InternalError();
            }
        }
    }
}
