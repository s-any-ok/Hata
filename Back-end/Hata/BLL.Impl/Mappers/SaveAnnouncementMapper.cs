using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class SaveAnnouncementMapper : IUpdateMapper<SaveAnnouncement, SaveAnnouncementModel>
    {
        public SaveAnnouncementModel Map(SaveAnnouncement ent)
        {
            return new SaveAnnouncementModel()
            {
                Id = ent.Id,
                UserId = ent.UserId,
                AnnouncementId = ent.AnnouncementId
            };
        }

        public SaveAnnouncement MapBack(SaveAnnouncementModel mdl)
        {
            return new SaveAnnouncement()
            {
                Id = mdl.Id,
                UserId = mdl.UserId,
                AnnouncementId = mdl.AnnouncementId
            };
        }

        public SaveAnnouncement MapBackInto(SaveAnnouncement existingEntity, SaveAnnouncementModel mdl)
        {
            existingEntity.Id = mdl.Id;
            existingEntity.UserId = mdl.UserId;
            existingEntity.AnnouncementId = mdl.AnnouncementId;
           
            return existingEntity;
        }
    }
}
