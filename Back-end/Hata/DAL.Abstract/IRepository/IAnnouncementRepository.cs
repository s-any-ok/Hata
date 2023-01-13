using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository.Base;
using Hata.Entities;

namespace Hata.DAL.Abstract.IRepository
{
    public interface IAnnouncementRepository : IGenericKeyRepository<Guid, Announcement>
    {
        Task<List<Announcement>> GetAnnouncements(int offset, int pageSize);
        Task<Announcement> GetByIdWithInclude(Guid id);
    }
}
