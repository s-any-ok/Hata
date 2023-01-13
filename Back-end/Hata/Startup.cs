using Hata.BLL.Impl;
using Hata.DAL.Impl;
using Hata.Entities;
using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Converters;
using Microsoft.AspNetCore.Http;
using Hata.Utils;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Hata.Managers.Impl;

namespace Hata
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddControllers()
                .AddNewtonsoftJson(opts => { opts.SerializerSettings.Converters.Add(new StringEnumConverter()); });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Hata WEB API", Version = "v1" });
            });

            services.AddDbContext<HataDbContext>(opt =>
                opt.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

            services.AddCors();

            services.AddIdentity<User, IdentityRole<Guid>>()
                .AddEntityFrameworkStores<HataDbContext>()
                .AddDefaultTokenProviders();
            
            DalDependencyInstaller.Install(services);
            ManagerDependencyInstaller.Install(services);
            BlDependencyInstaller.Install(services);
            
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseSwagger();
            app.UseSwaggerUI(x =>
            {
                x.SwaggerEndpoint("/swagger/v1/swagger.json", "Hata WEB API v1");

            });

            app.UseAuthentication();

            /*app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());*/

            app.UseCors(options => options.WithOrigins("http://localhost:3000")
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "Images")),
                RequestPath = "/Images"
            });

            app.UseMiddleware<JwtMiddleware>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "api/{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
