using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class JobSeeker
    {
        public string Id {get; set;}
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? CountryCode { get; set; }
        public string? PhoneNumber { get; set; }
        public string? LocationName { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public AppUser? AppUser { get; set; }
        public ICollection<JobApplication> JobApplications {get; set;} = new List<JobApplication>();
    }
}