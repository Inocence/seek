using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string? CompanyName { get; set; }
        public string CompanyWebsite { get; set; } = string.Empty;
        public string? ContactNumber { get; set; }
        public string? Logo { get; set;}
        public string Description { get; set; } = string.Empty;
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public Industry? Industry { get; set; }
        public int AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
    }
}