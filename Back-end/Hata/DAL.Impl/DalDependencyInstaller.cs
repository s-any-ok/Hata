using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace Hata.DAL.Impl
{
    public static class DalDependencyInstaller
    {
        public static void Install(IServiceCollection services)
        {
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IAnnouncementRepository, AnnouncementRepository>();
            
            services.AddTransient<ISaveAnnouncementRepository, SaveAnnouncementRepository>();
            services.AddTransient<IRespondAnnouncementRepository, RespondAnnouncementRepository>();

            services.AddTransient<IInteresRepository, InteresRepository>();
            services.AddTransient<ISocialRepository, SocialRepository>();
            services.AddTransient<IImageRepository, ImageRepository>(); 
            services.AddTransient<ILocationPointsRepository, LocationPointsRepository>();
            services.AddTransient<IAnnouncementLocationPointsRepository, AnnouncementLocationPointsRepository>();
        }
    }
}
