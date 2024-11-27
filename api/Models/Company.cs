using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;

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
        public int JobCount {get; set;}
        public int IndustryId {get; set;}
        public IsActive IsActive {get; set;} = IsActive.IsActive;
        public Industry? Industry { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
    }
}