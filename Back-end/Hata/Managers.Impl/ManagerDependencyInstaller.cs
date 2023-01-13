using Hata.Managers.Abstract;
using Microsoft.Extensions.DependencyInjection;

namespace Hata.Managers.Impl
{
    public static class ManagerDependencyInstaller
    {
        public static void Install(IServiceCollection services)
        {
            services.AddTransient<IImageManager, ImageManager>();
        }
    }
}
