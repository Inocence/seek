using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Constants;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDbContext: IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
            
        }

        public DbSet<Company> Companies {get; set;}
        public DbSet<Image> Images {get; set;}
        public DbSet<Industry> Industries {get; set;}
        public DbSet<JobApplication> JobApplications {get; set;}
        public DbSet<JobPosting> JobPostings {get; set;}
        public DbSet<JobSeeker> JobSeekers {get; set;}
        public DbSet<Recruiter> Recruiters {get; set;}


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            var roles = new[] {
                new IdentityRole{
                    Name = RoleType.Admin,
                    NormalizedName = RoleType.Admin.ToUpper()
                },
                new IdentityRole{
                    Name = RoleType.JobSeeker,
                    NormalizedName = RoleType.JobSeeker.ToUpper(),
                },
                new IdentityRole{
                    Name = RoleType.Company,
                    NormalizedName = RoleType.Company.ToUpper(),
                },
                new IdentityRole{
                    Name = RoleType.Recruiter,
                    NormalizedName = RoleType.Recruiter.ToUpper(),
                }
            };

            builder.Entity<IdentityRole>().HasData(roles);

            builder.Entity<JobApplication>()
                .HasOne(j => j.JobPosting)
                .WithMany(j => j.JobApplications)
                .HasForeignKey(j => j.JobSeekerId);

            builder.Entity<JobApplication>()
                .HasOne(j => j.JobSeeker)
                .WithMany(j => j.JobApplications)
                .HasForeignKey(j => j.JobPostingId);
        }
    }
}