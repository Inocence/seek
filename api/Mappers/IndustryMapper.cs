using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.IndustryDto;
using api.Models;

namespace api.Mappers
{
    public static class IndustryMapper
    {
        public static IndustrySimpleResponseDto FromModelToResponseDto(this Industry industry) {
            return new IndustrySimpleResponseDto{
                Id = industry.Id,
                Name = industry.Name,
                ParentId = industry.ParentId,
                SortOrder = industry.SortOrder,
                JobCount = industry.JobCount
            };
        }
    }
}