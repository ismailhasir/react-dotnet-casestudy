using Api.Dto;
using Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        ILogger<UsersController> _logger;
        ApiDbContext _dbContext;
        public UsersController(ILogger<UsersController> logger, ApiDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;

        }
        [HttpPost("Login")]
        public IActionResult Login(UsersDto.LoginRequest req)
        {
            var query = _dbContext.Users.Where(w => w.Email == req.Email && w.Password == req.Password);
            if (query.Any())
            {
                return Ok();
            }

            return Unauthorized();
        }

        [HttpPost("Register")]
        public IActionResult Register(UsersDto.RegisterRequest req)
        {
            var query = _dbContext.Users.Where(w => w.Email == req.Email);
            if (query.Any())
            {
                return UnprocessableEntity("Bu email başka bir kullanıcı tarafından kullanılıyor.");
            }

            try
            {
                var user = new User
                {
                    CreatedDate = DateTime.Now,
                    Email = req.Email,
                    FirstName = req.FirstName,
                    LastName = req.LastName,
                    Password = req.Password
                };

                _dbContext.Users.Add(user);

                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "error occured while inserting new user.");

                return Problem("Bir hata oluştu");
            }

            return Ok();
        }
    }
}
