using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.CompanyDto;
using api.Dtos.JobPostingDto;
using api.Interfaces;
using api.Mappers;
using api.Utilities;
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
            var jobPostings = result.Data.Select(j => j.FromModelToReponseDto()).ToList();
            return Ok(new PageResult<JobPostingSimpleResponseDto> {
                Data = jobPostings,
                TotalRecords = result.TotalRecords,
                TotalPages = result.TotalPages,
                CurrentPage = result.CurrentPage
            });
        }
    }
}