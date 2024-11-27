using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class IndustryRepository : IIndustryRepository
    {
        private readonly ApplicationDbContext _context;
        public IndustryRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Task<List<Industry>> GetIndustriesList()
        {
            var result = _context.Industries
                .Where(x => x.IsActive == IsActive.IsActive)
                .OrderBy(x => x.SortOrder)
                .ToListAsync();

            return result;
        }
    }
}