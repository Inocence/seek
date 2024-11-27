using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/industry")]
    [ApiController]
    public class IndustryController : ControllerBase
    {
        private readonly IIndustryRepository _indutryRepo;
        public IndustryController(
            IIndustryRepository indutryRepo
        )
        {
            _indutryRepo = indutryRepo;
        }

        [HttpGet("get-industries-list")]
        public async Task<IActionResult> GetIndustriesList()
        {
            var result = await _indutryRepo.GetIndustriesList();
            var industries = result.Select(x => x.FromModelToResponseDto());
            return Ok(industries);
        }
    }
}