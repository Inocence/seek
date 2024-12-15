using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public enum JobApplicationType
    {
        Pending = 1,
        Reviewed = 2,
        Accepted = 3,
        Rejected = 4
    }
    public class JobApplication
    {
        public int Id {get; set;}
        public JobApplicationType Status {get; set;}
        public DateTime CreatedAt {get; set;}
        public int JobPostingId {get; set;}
        public JobPosting? JobPosting {get; set;}
        public string? JobSeekerId {get; set;}
        public JobSeeker JobSeeker {get; set;}
    }
}