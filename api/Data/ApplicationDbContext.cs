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

            //Appuser -> JobPosting (Many-to-Many)
            builder.Entity<JobApplication>()
                .HasOne(j => j.JobPosting)
                .WithMany(j => j.JobApplications)
                .HasForeignKey(j => j.JobPostingId);

            builder.Entity<JobApplication>()
                .HasOne(j => j.JobSeeker)
                .WithMany(j => j.JobApplications)
                .HasForeignKey(j => j.JobSeekerId);

            //Appuser -> Company (One-to-One)
            builder.Entity<Company>()
                .HasOne(c => c.AppUser)
                .WithOne()
                .HasForeignKey<Company>(c => c.Id)
                .OnDelete(DeleteBehavior.Restrict);
            
            //AppUser -> JobSeeker (One-to-One)
            builder.Entity<JobSeeker>()
                .HasOne(j => j.AppUser)
                .WithOne()
                .HasForeignKey<JobSeeker>(j => j.Id)
                .OnDelete(DeleteBehavior.Restrict);

            //JobPosting -> Industry
            builder.Entity<JobPosting>()
                .HasOne(j => j.Industry)
                .WithMany(i => i.JobPostings)
                .HasForeignKey(j => j.IndustryId)
                .OnDelete(DeleteBehavior.Restrict);

            //JobPosting -> Company
            builder.Entity<JobPosting>()
                .HasOne(j => j.Company)
                .WithMany(c => c.JobPostings)
                .HasForeignKey(j => j.CompanyId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}