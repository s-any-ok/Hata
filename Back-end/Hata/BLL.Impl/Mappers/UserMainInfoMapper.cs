using System;
using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models.Responses;

namespace Hata.BLL.Impl.Mappers
{
    public class UserMainInfoMapper : IMapper<User, UserMainInfoResponse>
    {
        public UserMainInfoResponse Map(User ent)
        {
            return new UserMainInfoResponse()
            {
                UserName = ent.UserName,
                University = ent.University,
                Faculty = ent.Faculty,
                Course = ent.Course,
                Bio = ent.Bio,
                BirthDay = DateTime.SpecifyKind(ent.BirthDay, DateTimeKind.Utc),
                GenderType = ent.GenderType,
            };
        }
    }
}
