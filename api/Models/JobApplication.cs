using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;

namespace api.Models
{
    public class JobApplication
    {
        public int Id {get; set;}
        public JobApplicationType Status {get; set;}
        public DateTime CreatedAt {get; set;}
        public int JobPostingId {get; set;}
        public JobPosting? JobPosting {get; set;}
        public int JobSeekerId {get; set;}
        public JobSeeker? JobSeeker {get; set;}
    }
}