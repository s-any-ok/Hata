using System;
using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class AppUserMainInfoMapper : IMapper<User, UserMainInfoModel>
    {
        public UserMainInfoModel Map(User ent)
        {
            return new UserMainInfoModel()
            {
                Id = ent.Id,
                University = ent.University,
                Faculty = ent.Faculty,
                Course = ent.Course,
                Bio = ent.Bio,
                BirthDay = DateTime.SpecifyKind(ent.BirthDay, DateTimeKind.Utc),       
                GenderType = ent.GenderType,
                JoinedDate = ent.JoinedDate,
            };
        }
    }
}
