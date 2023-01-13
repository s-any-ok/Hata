using System;
using Hata.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Hata.DAL.Impl
{
    public class HataDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {
        public HataDbContext(DbContextOptions<HataDbContext> options): base(options)
        {

        }

        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<RespondAnnouncement> RespondAnnouncements { get; set; }
        public DbSet<SaveAnnouncement> SaveAnnouncements { get; set; }
        public DbSet<Social> Social { get; set; }
        public DbSet<AnnouncementLocationPoints> AnnouncementLocationPoints { get; set; }
        public DbSet<LocationPoints> LocationPoints { get; set; }
        public DbSet<Interes> Interests { get; set; }
        public DbSet<Image> Images { get; set; }
    }
}
