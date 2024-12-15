using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.CompanyDto;
using api.Dtos.IndustryDto;
using api.Models;

namespace api.Dtos.JobPostingDto
{
    public class JobPostingSimpleResponseDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public JobType JobType { get; set; }
        public DateTime PostedDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public WorkMode WorkMode { get; set; }
        public string Tags { get; set; }
        public string Salary { get; set; }
        public string LocationName { get; set; }
        public IndustrySimpleResponseDto Industry { get; set; }
        public CompanySimpleReponseDto Company { get; set; }
    }
}