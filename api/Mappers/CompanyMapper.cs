using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.CompanyDto;
using api.Models;
using api.Utilities;

namespace api.Mappers
{
    public static class CompanyMapper
    {
        public static CompanySimpleReponseDto FromModelToReponseDto(this Company company) {
            return new CompanySimpleReponseDto{
                Id = company.Id,
                CompanyName = company.CompanyName,
                Logo = company.Logo,
                JobCount = company.JobCount,
                IndustryId = company.IndustryId
            };
        }
    }
}