using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Hata.Managers.Abstract
{
    public interface IImageManager
    {
        Task<string> SaveImage(IFormFile imageFile);
        void DeleteImage(string imageName);
    }
}
