using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.IndustryDto
{
    public class IndustrySimpleResponseDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int ParentId { get; set; }
        public int SortOrder {get; set;}
        public int JobCount {get; set;}
    }
}