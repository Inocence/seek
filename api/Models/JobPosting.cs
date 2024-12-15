using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public enum JobStatus
    {
        Active = 1,
        Closed = 2
    }

    public enum JobType
    {
        FullTime = 1,
        ParTime = 2,
        ContractTemp = 3,
        CasualVacation = 4
    }

    public enum WorkMode
    {
        OnSite = 1,
        Remote = 2,
        Hybrid = 3
    }

    public class JobPosting
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public JobType JobType { get; set; }
        public DateTime PostedDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public WorkMode WorkMode { get; set; }
        public string Tags { get; set; } = string.Empty;
        public string Salary { get; set; } = string.Empty;
        public string LocationName { get; set; } = string.Empty;
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public int IndustryId { get; set; }
        public Industry Industry { get; set; }
        public string CompanyId { get; set; }
        public Company Company { get; set;}
        public ICollection<JobApplication> JobApplications {get; set;} = new List<JobApplication>();
    }
}