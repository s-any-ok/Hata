using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Hata.Migrations
{
    public partial class AnnouncementLocationPoints : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_LocationPoints_LocationId",
                table: "Announcements");

            migrationBuilder.CreateTable(
                name: "AnnouncementLocationPoints",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Latitude = table.Column<double>(type: "double precision", nullable: false),
                    Longitude = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnnouncementLocationPoints", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Announcements_AnnouncementLocationPoints_LocationId",
                table: "Announcements",
                column: "LocationId",
                principalTable: "AnnouncementLocationPoints",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_AnnouncementLocationPoints_LocationId",
                table: "Announcements");

            migrationBuilder.DropTable(
                name: "AnnouncementLocationPoints");

            migrationBuilder.AddForeignKey(
                name: "FK_Announcements_LocationPoints_LocationId",
                table: "Announcements",
                column: "LocationId",
                principalTable: "LocationPoints",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
