using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Company;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/job-posting")]
    [ApiController]
    public class JobPostingController : ControllerBase
    {
        private readonly IJobPostingRepository _jobPostingRepo;
        public JobPostingController(IJobPostingRepository jobPostingRepo)
        {
            _jobPostingRepo = jobPostingRepo;
        }
        
        [HttpGet("get-list-by-query")]
        public async Task<IActionResult> GetListByQuery([FromQuery] JobPostingQuery query) {
            var result = await _jobPostingRepo.GetListByQuery(query);
            return Ok(result);
        }
    }
}