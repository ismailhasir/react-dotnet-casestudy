using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dto
{
    public class UsersDto
    {
        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class RegisterRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }

        }
    }
}
