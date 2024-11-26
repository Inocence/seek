using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Recruiter
    {
        public int Id { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        public int CompanyId { get; set; }
        public Company? Company { get; set; }
        public List<JobPosting> JobPostings {get; set;} = new List<JobPosting>();
    }
}