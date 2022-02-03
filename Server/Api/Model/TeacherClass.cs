using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Model
{
    public class TeacherClass
    {
        [Key]
        public int Id { get; set; }

        public int ClassId { get; set; }

        public int TeacherId { get; set; }

        public virtual Class Classes { get; set; }
        public virtual User User { get; set; }
    }
}
