
using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class SocialMapper : IUpdateMapper<Social, SocialModel>
    {
        public SocialModel Map(Social ent)
        {
            return new SocialModel()
            {
                Id = ent.Id,
                SocialType = ent.SocialType,
                Link = ent.Link,
                UserId = ent.UserId
            };
        }

        public Social MapBack(SocialModel mdl)
        {
            return new Social()
            {
                Id = mdl.Id,
                SocialType = mdl.SocialType,
                Link = mdl.Link,
                UserId = mdl.UserId
            };
        }
        public Social MapBackInto(Social existingEntity, SocialModel mdl)
        {
            existingEntity.Id = mdl.Id;
            existingEntity.SocialType = mdl.SocialType;
            existingEntity.Link = mdl.Link;
            existingEntity.UserId = mdl.UserId;
            return existingEntity;
        }
    }
}
