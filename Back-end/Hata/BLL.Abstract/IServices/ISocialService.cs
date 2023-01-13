using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;

namespace Hata.BLL.Abstract.IServices
{
    public interface ISocialService
    {
        Task<Response> AddSocial(SocialRequest socialRequest, Guid userId);
        Task<Response> DeleteSocial(DeleteRequest deleteRequest, Guid userId);
        Task<Response> UpdateSocial(SocialModel socialModel);
        Task<Response<List<SocialModel>>> GetSocialByUserId(Guid userId);
    }
}
