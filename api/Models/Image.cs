using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string? FileName { get; set; }
        public string? BlogUrl { get; set; }
        public string? ContentType { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
    }
}