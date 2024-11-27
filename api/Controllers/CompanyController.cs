using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Common;
using api.Dtos.Company;
using api.Interfaces;
using api.Mappers;
using api.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/company")]
    [ApiController]
    public class CompanyController: ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ICompanyRepository _companyRepo;
        public CompanyController(
            ApplicationDbContext context,
            ICompanyRepository companyRepo
            )
        {
            _context = context;
            _companyRepo = companyRepo;
        }

        [HttpGet("get-home-page-companies")]
        public async Task<IActionResult> GetHomePageCompanies([FromQuery] SimpleQuery simpleQuery) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var result = await _companyRepo.GetHomePageCompanies(simpleQuery.PageNumber, simpleQuery.PageSize);
            var companies = result.Data.Select(x => x.FromModelToReponseDto());
            return Ok(new PageResult<CompanyListReponseDto> {
                Data = result.Data.Select(x => x.FromModelToReponseDto()).ToList(),
                TotalRecords = result.TotalRecords,
                TotalPages = result.TotalPages,
                CurrentPage = result.CurrentPage
            });
        }
    }
}