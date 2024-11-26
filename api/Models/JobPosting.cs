using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;

namespace api.Models
{
    public class JobPosting
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public JobType JobType { get; set; }
        public DateTime PostedDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public WorkMode WorkMode { get; set; }
        public string? Tags { get; set; }
        public string? Salary { get; set; }
        public string LocationName { get; set; } = string.Empty;
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public int IndustryId { get; set; }
        public Industry? Industry { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set;}
        public List<JobApplication> JobApplications {get; set;} = [];
    }
}