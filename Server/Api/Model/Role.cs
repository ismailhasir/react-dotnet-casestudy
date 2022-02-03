using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Model
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public virtual List<User> Users { get; set; }


    }
}
