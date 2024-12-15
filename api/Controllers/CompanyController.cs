using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.CommonDto;
using api.Dtos.CompanyDto;
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

        [HttpGet("get-list-by-query")]
        public async Task<IActionResult> GetListByQuery([FromQuery] SimpleQuery simpleQuery) {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var result = await _companyRepo.GetListByQuery(simpleQuery.PageNumber, simpleQuery.PageSize);
            var companies = result.Data.Select(x => x.FromModelToReponseDto());
            return Ok(new PageResult<CompanySimpleReponseDto> {
                Data = result.Data.Select(x => x.FromModelToReponseDto()).ToList(),
                TotalRecords = result.TotalRecords,
                TotalPages = result.TotalPages,
                CurrentPage = result.CurrentPage
            });
        }

    }
}