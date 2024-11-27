using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Utilities;

namespace api.Interfaces
{
    public interface ICompanyRepository
    {
        Task<PageResult<Company>> GetHomePageCompanies(int pageNumber, int pageSize);
    }
}