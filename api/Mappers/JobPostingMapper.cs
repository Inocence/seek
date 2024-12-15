using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.JobPostingDto;
using api.Models;

namespace api.Mappers
{
    public static class JobPostingMapper
    {
        public static JobPostingSimpleResponseDto FromModelToReponseDto(this JobPosting jobPosting) {
            return new JobPostingSimpleResponseDto{
                Id = jobPosting.Id,
                Title = jobPosting.Title,
                Description = jobPosting.Description,
                JobType = jobPosting.JobType,
                PostedDate = jobPosting.PostedDate,
                ExpiryDate = jobPosting.ExpiryDate,
                WorkMode = jobPosting.WorkMode,
                Tags = jobPosting.Tags,
                Salary = jobPosting.Salary,
                LocationName = jobPosting.LocationName,
                Industry = jobPosting.Industry.FromModelToResponseDto(),
                Company = jobPosting.Company.FromModelToReponseDto()
            };
        }
    }
}