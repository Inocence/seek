using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Utilities
{
    public class PageResult<T>
    {
        public List<T> Data {get; set;} = [];
        public int TotalRecords {get; set;}
        public int TotalPages {get; set;}
        public int CurrentPage {get; set;}
    }
}