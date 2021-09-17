using System.Collections.Generic;
using System.Linq;

namespace Todo
{
    public class TaskRepository
    {
        private readonly TodoContext context;

        public TaskRepository()
        {
            context = new TodoContext();
        }

        public List<Task> Get()
        {
            return context.Task
                .Where(x => !x.IsArchived)
                .OrderBy(x => x.IsCompleted)
                .ThenBy(x => x.Description)
                .ToList();
        }

        public Task Get(long id)
        {
            return context.Task.Where(x => x.Id == id).FirstOrDefault();
        }

        public void Insert(Task task)
        {
            context.Task.Add(task);
            context.SaveChanges();
        }

        public void Update(Task task)
        {
            var taskDb = context.Task.Where(x => x.Id == task.Id).FirstOrDefault();
            taskDb.Description = task.Description;
            taskDb.Title = task.Title;
            context.SaveChanges();
        }

        public void Delete(long id)
        {
            var taskDb = context.Task.Find(id);
            context.Task.Remove(taskDb);
            context.SaveChanges();
        }

        public void Complete(long id)
        {
            var tarefaDb = context.Task.Where(x => x.Id == id).FirstOrDefault();
            tarefaDb.IsCompleted = true;
            context.SaveChanges();
        }

        public void Archive(long id)
        {
            var tarefaDb = context.Task.Where(x => x.Id == id).FirstOrDefault();
            tarefaDb.IsArchived = true;
            context.SaveChanges();
        }
    }
}