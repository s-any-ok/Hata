using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Hata.DAL.Abstract.IRepository.Base;
using Hata.Entities;

namespace Hata.DAL.Abstract.IRepository
{
    public interface IRespondAnnouncementRepository : IGenericKeyRepository<Guid, RespondAnnouncement>
    {
        Task<List<RespondAnnouncement>> GetRespondAnnouncement(Guid userId);
    }
}
