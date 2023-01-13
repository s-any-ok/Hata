using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Hata.Migrations
{
    public partial class fixRelations2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_LocationPoints_LocationId",
                table: "Announcements");

            migrationBuilder.DropIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "Announcements");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "LocationId",
                table: "Announcements",
                type: "uuid",
                nullable: true);

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
        }
    }
}
