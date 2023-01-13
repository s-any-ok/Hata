using System;
using Hata.Entities;
using Hata.Entities.Enums;

namespace Hata.Models
{
    public class InteresModel
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public InteresType InteresType { get; set; }
    }
}
