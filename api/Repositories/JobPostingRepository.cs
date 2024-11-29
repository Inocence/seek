using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Company;
using api.Interfaces;
using api.Models;
using api.Utilities;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class JobPostingRepository : IJobPostingRepository
    {
        private readonly ApplicationDbContext _context;
        public JobPostingRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<PageResult<JobPosting>> GetListByQuery(JobPostingQuery query)
        {
            var querable = _context.JobPostings.AsQueryable();
            if(!string.IsNullOrWhiteSpace(query.Keywords)) {
                querable = querable.Where(x => x.Title.Contains(query.Keywords) || x.Description.Contains(query.Keywords));
            }

            if(!string.IsNullOrWhiteSpace(query.Industries)) {
                string[] industryStr = query.Industries.Split(",");
                int[] industryIds = industryStr.Select(x => int.Parse(x)).ToArray();
                querable = querable.Where(x => industryIds.Contains(x.IndustryId));
            }

            if(!string.IsNullOrWhiteSpace(query.LocationNames)) {
                querable = querable.Where(x => x.LocationName.Contains(query.LocationNames));
            }

            var TotalRecords = await querable.CountAsync();
            var result = await querable.Skip(query.PageNumber).Take(query.PageSize).ToListAsync();
            return new PageResult<JobPosting>{
                Data = result,
                TotalRecords = TotalRecords,
                TotalPages = (int)Math.Ceiling(TotalRecords / (double)query.PageSize),
                CurrentPage = query.PageNumber
            };
        }
    }
}