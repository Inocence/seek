using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;
using api.Data;
using api.Interfaces;
using api.Models;
using api.Utilities;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly ApplicationDbContext _context;
        public CompanyRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PageResult<Company>> GetListByQuery(int pageNumber, int pageSize)
        {
            var query = _context.Companies
                            .Where(x => x.IsActive == IsActive.IsActive)
                            .OrderByDescending(x => x.Id);

            var TotalRecords = await query.CountAsync();
            var result = await query.Skip(pageNumber).Take(pageSize).ToListAsync();

            return new PageResult<Company>{
                Data = result,
                TotalRecords = TotalRecords,
                TotalPages = (int)Math.Ceiling(TotalRecords / (double)pageSize),
                CurrentPage = pageNumber
            };
        }
    }
}