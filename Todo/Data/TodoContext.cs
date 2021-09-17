using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Todo
{
    public class TodoContext : DbContext
    {
        public DbSet<Task> Task { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"");
        }
    }

    public class Task
    {
        public long Id { get; set; }

        [MaxLength(64)]
        public string Title { get; set; }

        [MaxLength(1024)]
        public string Description { get; set; }

        public bool IsCompleted { get; set; }

        public bool IsArchived { get; set; }
    }
}