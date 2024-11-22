using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dto.Account;
using api.Models;
using Microsoft.AspNetCore.Identity;

namespace api.Interfaces
{
    public interface IAuthService
    {
        Task<SignInResult> LoginAsync(LoginDto loginDto);
        Task<IdentityResult> RegisterAsync(RegisterDto registerDto);
    }
}