using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;

namespace api.Models
{
    public class Industry
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int ParentId { get; set; }
        public int SortOrder {get; set;}
        public IsActive IsActive { get; set; } = IsActive.IsActive;
        public List<Company> Companies {get; set;} = [];
        public DateTime UpdatedAt { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}