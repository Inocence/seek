using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser: IdentityUser
    {
        public override string? UserName { get => Email; set => base.UserName = value; }
    }
}