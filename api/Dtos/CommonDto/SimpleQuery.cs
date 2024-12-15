using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.CommonDto
{
    public class SimpleQuery
    {
        [Range(1, int.MaxValue, ErrorMessage = "Page must be a positive integer.")]
        public int PageNumber {get; set;} = 1;
        [Range(1, int.MaxValue, ErrorMessage = "Size must be positive integer.")]
        public int PageSize {get; set;} = 10;
    }
}