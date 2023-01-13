using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;
using Hata.Models.Responses;

namespace Hata.BLL.Impl.Mappers
{
    public class SaveAnnouncementResponseMapper : IMapper<SaveAnnouncement, SaveAnnouncementResponse>
    {
        public SaveAnnouncementResponse Map(SaveAnnouncement ent)
        {
            return new SaveAnnouncementResponse()
            {
                Id = ent.Id,
                Announcement = ent.Announcement
            };
        }
    }
}
