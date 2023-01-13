using Hata.BLL.Abstract.IMapper;
using Hata.BLL.Abstract.IServices;
using Hata.BLL.Impl.Mappers;
using Hata.BLL.Impl.Services;
using Hata.Entities;
using Hata.Models;
using Hata.Models.Responses;
using Microsoft.Extensions.DependencyInjection;

namespace Hata.BLL.Impl
{
    public static class BlDependencyInstaller
    {
        public static void Install(IServiceCollection services)
        {
            //services
            services.AddTransient<IAnnouncementService, AnnouncementService>();
            services.AddTransient<IInteresService, InteresService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IRespondAnnouncementService, RespondAnnouncementService>();
            services.AddTransient<ISaveAnnouncementService, SaveAnnouncementService>();
            services.AddTransient<ISocialService, SocialService>();

            //mappers
            services.AddTransient<IUpdateMapper<Announcement, AnnouncementModel>, AnnouncementMapper>();
            services.AddTransient<IUpdateMapper<Interes, InteresModel>, InteresMapper>();
            services.AddTransient<IUpdateMapper<Social, SocialModel>, SocialMapper>();
            services.AddTransient<IUpdateMapper<RespondAnnouncement, RespondAnnouncementModel>, RespondAnnouncementMapper>();
            services.AddTransient<IUpdateMapper<SaveAnnouncement, SaveAnnouncementModel>, SaveAnnouncementMapper>();

            services.AddTransient<IBackMapper<User, UserModel>, AppUserMapper>();

            services.AddTransient<IMapper<User, UserMainInfoResponse>, UserMainInfoMapper>();
            services.AddTransient<IMapper<User, UserMainInfoModel>, AppUserMainInfoMapper>();
            services.AddTransient<IMapper<Image, ImageResponse>, ImageResponseMapper>();
            services.AddTransient<IMapper<SaveAnnouncement, SaveAnnouncementResponse>, SaveAnnouncementResponseMapper>();
            services.AddTransient<IMapper<RespondAnnouncement, RespondAnnouncementResponse>, RespondAnnouncementResponseMapper>();
        }
    }
}
