using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository.Base;
using Hata.Entities;

namespace Hata.DAL.Abstract.IRepository
{
    public interface ISaveAnnouncementRepository : IGenericKeyRepository<Guid, SaveAnnouncement>
    {
        Task<List<SaveAnnouncement>> GetSaveAnnouncement(Guid userId);
    }
}
