
using Hata.BLL.Abstract.IMapper;
using Hata.Entities;
using Hata.Models;

namespace Hata.BLL.Impl.Mappers
{
    public class AnnouncementMapper : IUpdateMapper<Announcement, AnnouncementModel>
    {
        public AnnouncementModel Map(Announcement ent)
        {
            return new AnnouncementModel()
            {
                Id = ent.Id,
                Title = ent.Title,
                Description = ent.Description,
                AmountOfFlats = ent.AmountOfFlats,
                AmountOfPeople = ent.AmountOfPeople,
                IsActive = ent.IsActive,
                UserId = ent.UserId,
                Location = ent.Location,
                Images = ent.Images,
                PriceFrom = ent.PriceFrom,
                PriceTo = ent.PriceTo,
                StartDate = ent.StartDate,
                EndDate = ent.EndDate,
            };
        }

        public Announcement MapBack(AnnouncementModel mdl)
        {
            return new Announcement()
            {
                Id = mdl.Id,
                Title = mdl.Title,
                Description = mdl.Description,
                AmountOfFlats = mdl.AmountOfFlats,
                AmountOfPeople = mdl.AmountOfPeople,
                IsActive = mdl.IsActive,
                UserId = mdl.UserId,
                Location = mdl.Location,
                Images = mdl.Images,
                PriceFrom = mdl.PriceFrom,
                PriceTo = mdl.PriceTo,
                StartDate = mdl.StartDate,
                EndDate = mdl.EndDate,
            };
        }

        public Announcement MapBackInto(Announcement existingEntity, AnnouncementModel mdl)
        {
            existingEntity.Id = mdl.Id;
            existingEntity.Title = mdl.Title;
            existingEntity.Description = mdl.Description;
            existingEntity.AmountOfFlats = mdl.AmountOfFlats;
            existingEntity.AmountOfPeople = mdl.AmountOfPeople;
            existingEntity.IsActive = mdl.IsActive;
            existingEntity.UserId = mdl.UserId;
            existingEntity.Location = mdl.Location;
            existingEntity.Images = mdl.Images;
            existingEntity.PriceFrom = mdl.PriceFrom;
            existingEntity.PriceTo = mdl.PriceTo;
            existingEntity.StartDate = mdl.StartDate;
            existingEntity.EndDate = mdl.EndDate;
            return existingEntity;
        }
    }
}
