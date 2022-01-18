using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Model
{
    public partial class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {

        }
        public virtual DbSet<User> Users { get; set; }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
