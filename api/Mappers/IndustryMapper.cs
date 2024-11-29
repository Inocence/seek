using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Industry;
using api.Models;

namespace api.Mappers
{
    public static class IndustryMapper
    {
        public static IndustryResponseDto FromModelToResponseDto(this Industry industry) {
            return new IndustryResponseDto{
                Id = industry.Id,
                Name = industry.Name,
                ParentId = industry.ParentId,
                SortOrder = industry.SortOrder,
                JobCount = industry.JobCount
            };
        }
    }
}