using Microsoft.EntityFrameworkCore.Migrations;

namespace Hata.Migrations
{
    public partial class fixRelations4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_LocationId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_LocationId",
                table: "AspNetUsers",
                column: "LocationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements",
                column: "LocationId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_LocationId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_LocationId",
                table: "AspNetUsers",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_LocationId",
                table: "Announcements",
                column: "LocationId");
        }
    }
}
