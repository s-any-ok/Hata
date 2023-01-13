using System;
using Hata.DAL.Abstract.IRepository.Base;
using Hata.Entities;

namespace Hata.DAL.Abstract.IRepository
{
    public interface IImageRepository : IGenericKeyRepository<Guid, Image>
    {

    }
}
