using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.CompanyDto;
using api.Dtos.JobPostingDto;
using api.Models;
using api.Utilities;

namespace api.Interfaces
{
    public interface IJobPostingRepository
    {
        Task<PageResult<JobPosting>> GetListByQuery(JobPostingQuery query);
    }
}