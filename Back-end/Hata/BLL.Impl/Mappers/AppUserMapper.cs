using System;
using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class AppUserMapper : IBackMapper<User, UserModel>
    {
        public UserModel Map(User ent)
        {
            return new UserModel()
            {
                Id = ent.Id,
                ImageId = ent.ImageId,
                University = ent.University,
                Faculty = ent.Faculty,
                Course = ent.Course,
                Bio = ent.Bio,
                LocationId = ent.LocationId,
                GenderType = ent.GenderType,
                JoinedDate = ent.JoinedDate,
                PhoneNumber = ent.PhoneNumber,
                BirthDay = DateTime.SpecifyKind(ent.BirthDay, DateTimeKind.Utc),
           
                Email = ent.Email,
                EmailConfirmed = ent.EmailConfirmed,
                LockoutEnabled = ent.LockoutEnabled,
                LockoutEnd = ent.LockoutEnd,
                NormalizedEmail = ent.NormalizedEmail,
                NormalizedUserName = ent.NormalizedUserName,
                PhoneNumberConfirmed = ent.PhoneNumberConfirmed,
            };
        }

        public User MapBack(UserModel mdl)
        {
            return new User()
            {
                Id = mdl.Id,
                ImageId = mdl.ImageId,
                University = mdl.University,
                Faculty = mdl.Faculty,
                Course = mdl.Course,
                Bio = mdl.Bio,
                LocationId = mdl.LocationId,
                GenderType = mdl.GenderType,
                JoinedDate = mdl.JoinedDate,
                PhoneNumber = mdl.PhoneNumber,
                Email = mdl.Email,
                EmailConfirmed = mdl.EmailConfirmed,

                LockoutEnabled = mdl.LockoutEnabled,
                LockoutEnd = mdl.LockoutEnd,
                NormalizedEmail = mdl.NormalizedEmail,
                NormalizedUserName = mdl.NormalizedUserName,
                PhoneNumberConfirmed = mdl.PhoneNumberConfirmed,
            };
        }
    }
}
