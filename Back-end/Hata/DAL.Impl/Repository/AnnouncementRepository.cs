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
    public class AnnouncementRepository : GenericKeyRepository<Guid, Announcement, HataDbContext>, IAnnouncementRepository
    {
        public AnnouncementRepository(HataDbContext context) : base(context)
        {

        }

        public async Task<List<Announcement>> GetAnnouncements(int offset, int pageSize)
        {
            return await Context.Announcements
                .Skip(offset)
                .Take(pageSize)
                .Include(x => x.Location)
                .Include(x => x.Images)
                .Include(x => x.User)
                .ToListAsync();
        }

        public async Task<Announcement> GetByIdWithInclude(Guid tripId)
        {
            return await Context.Announcements
                .Where(x => x.Id == tripId)
                .Include(x => x.Location)
                .Include(x => x.Images)
                .Include(x => x.User)
                .FirstOrDefaultAsync();
        }
    }
}
