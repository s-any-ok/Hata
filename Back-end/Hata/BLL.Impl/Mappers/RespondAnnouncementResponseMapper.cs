using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;
using Hata.Models.Responses;

namespace Hata.BLL.Impl.Mappers
{
    public class RespondAnnouncementResponseMapper : IMapper<RespondAnnouncement, RespondAnnouncementResponse>
    {
        public RespondAnnouncementResponse Map(RespondAnnouncement ent)
        {
            return new RespondAnnouncementResponse()
            {
                Id = ent.Id,
                Announcement = ent.Announcement,
                Comment = ent.Comment
            };
        }
    }
}
