using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class InteresMapper : IUpdateMapper<Interes, InteresModel>
    {
        public InteresModel Map(Interes ent)
        {
            return new InteresModel()
            {
                Id = ent.Id,
                InteresType = ent.InteresType,
                UserId = ent.UserId
            };
        }

        public Interes MapBack(InteresModel mdl)
        {
            return new Interes()
            {
                Id = mdl.Id,
                InteresType = mdl.InteresType,
                UserId = mdl.UserId
            };
        }

        public Interes MapBackInto(Interes existingEntity, InteresModel mdl)
        {
            existingEntity.Id = mdl.Id;
            existingEntity.InteresType = mdl.InteresType;
            existingEntity.UserId = mdl.UserId;
            return existingEntity;
        }
    }
}
