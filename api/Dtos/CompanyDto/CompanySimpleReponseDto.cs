using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.CompanyDto
{
    public class CompanySimpleReponseDto
    {
        public string Id { get; set; }
        public string? CompanyName { get; set; }
        public string? Logo { get; set; }
        public int JobCount { get; set; }
        public int IndustryId { get; set; }
    }
}