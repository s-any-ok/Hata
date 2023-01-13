using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.Models;
using Hata.Models.ApiWrapper;
using Hata.Models.Requests;

namespace Hata.BLL.Abstract.IServices
{
    public interface IInteresService
    {
        Task<Response> AddInteres(InteresRequest socialRequest, Guid userId);
        Task<Response> DeleteInteres(DeleteRequest deleteRequest, Guid userId);
        Task<Response> UpdateInteres(InteresModel socialModel);
        Task<Response<List<InteresModel>>> GetInteresByUserId(Guid userId);
    }
}
