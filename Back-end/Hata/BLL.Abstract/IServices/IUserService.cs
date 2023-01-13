using System;
using System.Threading.Tasks;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;
using Hata.Models.Requests.Auth;
using Hata.Models.Responses;
using Microsoft.AspNetCore.Mvc;

namespace Hata.BLL.Abstract.IServices
{
    public interface IUserService
    {
        Task<Response<AuthenticateResponse>> Authenticate(AuthenticateRequest model);
        Task<Response<AuthenticateResponse>> Register(AuthenticateRequest model);
        Task<Response> SetUserMainInfo(UserMainInfoRequest userMainInfoRequest, Guid userId);
        Task<Response> DeleteUser(Guid userId);
        Task<Response<ImageResponse>> GetPhoto(Guid userId);
        Task<Response> DeletePhoto(Guid userId);
        Task<Response<UserMainInfoResponse>> GetUserMainInfo(Guid userId);
        Task<Response> UpdatePhoto([FromForm] SaveOrUpdateImageRequest saveOrUpdatePhotoModel, Guid userId);
    }
}
