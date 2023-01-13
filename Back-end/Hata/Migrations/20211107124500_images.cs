using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Hata.Migrations
{
    public partial class images : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_AspNetUsers_UserId",
                table: "Images");

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

            migrationBuilder.DropIndex(
                name: "IX_Images_UserId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "LocationPoints");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "LocationPoints");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "IsPrivatePhoto",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Images");

            migrationBuilder.RenameColumn(
                name: "ContentType",
                table: "Images",
                newName: "ImageName");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ImageId",
                table: "AspNetUsers",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_LocationId",
                table: "AspNetUsers",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Announcements_LocationPoints_LocationId",
                table: "Announcements",
                column: "LocationId",
                principalTable: "LocationPoints",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Images_ImageId",
                table: "AspNetUsers",
                column: "ImageId",
                principalTable: "Images",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_LocationPoints_LocationId",
                table: "AspNetUsers",
                column: "LocationId",
                principalTable: "LocationPoints",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_LocationPoints_LocationId",
                table: "Announcements");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Images_ImageId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_LocationPoints_LocationId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ImageId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_LocationId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements");

            migrationBuilder.RenameColumn(
                name: "ImageName",
                table: "Images",
                newName: "ContentType");

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

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Images",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsPrivatePhoto",
                table: "Images",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Images",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_LocationPoints_AnnouncementId",
                table: "LocationPoints",
                column: "AnnouncementId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LocationPoints_UserId",
                table: "LocationPoints",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Images_UserId",
                table: "Images",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Images_AspNetUsers_UserId",
                table: "Images",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

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
    }
}
