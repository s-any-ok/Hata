using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Hata.Migrations
{
    public partial class updateEntities_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints");

            migrationBuilder.AddColumn<Guid>(
                name: "ImageId",
                table: "AspNetUsers",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "LocationId",
                table: "AspNetUsers",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints",
                column: "AnnouncementId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "AspNetUsers");

            migrationBuilder.CreateIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints",
                column: "AnnouncementId");
        }
    }
}
