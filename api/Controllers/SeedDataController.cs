using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/seed-data")]
    public class SeedDataController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        public SeedDataController(
            ApplicationDbContext context,
            UserManager<AppUser> userManager
            )
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost("add-companies")]
        public async Task<IActionResult> AddCompanies()
        {
            for (int i = 0; i < 15; i++)
            {
                var appUser = new AppUser
                {
                    UserName = i + "apple@gmail.com",
                    Email = i + "apple@gmail.com"
                };
                await _userManager.CreateAsync(appUser, "Aa123456");
                await _userManager.AddToRoleAsync(appUser, RoleType.Company);

                var industry = new Industry{
                    Name = "Information Technology" + i,
                    IsActive = IsActive.IsActive,
                };
                await _context.Industries.AddAsync(industry);
                await _context.SaveChangesAsync();

                var companyObj = new Company
                {
                    CompanyName = "Apple" + i,
                    CompanyWebsite = "https://www.apple.com/",
                    ContactNumber = "061234567",
                    Logo = "https://image-service-cdn.seek.com.au/0cf7857a1e552ff41e1673b84901b938d84c4d32/f3c5292cec0e05e4272d9bf9146f390d366481d0",
                    Latitude = -33.8688m,
                    Longitude = 151.2093m,
                    IndustryId = industry.Id,
                    AppUserId = appUser.Id
                };
                companyObj.CompanyName = companyObj.CompanyName + i;
                companyObj.AppUserId = appUser.Id;
                await _context.Companies.AddAsync(companyObj);
                await _context.SaveChangesAsync();
            }

            return Ok();
        }
    }
}