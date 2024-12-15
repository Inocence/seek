using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.JobPostingDto
{
    public class JobPostingQuery
    {
        public string Industries {get; set;} = string.Empty;
        public string Keywords {get; set;} = string.Empty;
        public string LocationNames {get; set;} = string.Empty;
        public int PageNumber {get; set;} = 1;
        public int PageSize {get; set;} = 10;
    }
}