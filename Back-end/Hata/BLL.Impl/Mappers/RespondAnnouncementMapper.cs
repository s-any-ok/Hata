using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class RespondAnnouncementMapper : IUpdateMapper<RespondAnnouncement, RespondAnnouncementModel>
    {
        public RespondAnnouncementModel Map(RespondAnnouncement ent)
        {
            return new RespondAnnouncementModel()
            {
                Id = ent.Id,
                Comment = ent.Comment
            };
        }

        public RespondAnnouncement MapBack(RespondAnnouncementModel mdl)
        {
            return new RespondAnnouncement()
            {
                Id = mdl.Id,
                Comment = mdl.Comment
            };
        }

        public RespondAnnouncement MapBackInto(RespondAnnouncement existingEntity, RespondAnnouncementModel mdl)
        {
            existingEntity.Id = mdl.Id;
            existingEntity.Comment = mdl.Comment;
            return existingEntity;
        }
    }
}
