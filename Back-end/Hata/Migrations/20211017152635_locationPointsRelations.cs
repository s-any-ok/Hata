using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Hata.Migrations
{
    public partial class locationPointsRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<Guid>(
                name: "AnnouncementId",
                table: "LocationPoints",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "LocationPoints",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints",
                column: "AnnouncementId");

            migrationBuilder.CreateIndex(
                name: "IX_LocationPoints_UserId",
                table: "LocationPoints",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LocationPoints_Announcements_AnnouncementId",
                table: "LocationPoints",
                column: "AnnouncementId",
                principalTable: "Announcements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LocationPoints_AspNetUsers_UserId",
                table: "LocationPoints",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LocationPoints_Announcements_AnnouncementId",
                table: "LocationPoints");

            migrationBuilder.DropForeignKey(
                name: "FK_LocationPoints_AspNetUsers_UserId",
                table: "LocationPoints");

            migrationBuilder.DropIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints");

            migrationBuilder.DropIndex(
                name: "IX_LocationPoints_UserId",
                table: "LocationPoints");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "LocationPoints");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "LocationPoints");

            migrationBuilder.AddColumn<Guid>(
                name: "LocationId",
                table: "AspNetUsers",
                type: "uuid",
                nullable: true);
        }
    }
}
