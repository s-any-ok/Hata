using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository;
using Hata.DAL.Impl.Repository.Base;
using Hata.Entities;
using Microsoft.EntityFrameworkCore;

namespace Hata.DAL.Impl.Repository
{
    public class RespondAnnouncementRepository : GenericKeyRepository<Guid, RespondAnnouncement, HataDbContext>, IRespondAnnouncementRepository
    {
        public RespondAnnouncementRepository(HataDbContext context) : base(context)
        {

        }

        public async Task<List<RespondAnnouncement>> GetRespondAnnouncement(Guid userId)
        {
            return await Context.RespondAnnouncements
                .Where(x => x.UserId == userId)
                .Include(x => x.Announcement)
                .ThenInclude(x => x.User)
                .ToListAsync();
        }
    }
}
