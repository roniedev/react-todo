using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Todo.Data;

namespace Todo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly TaskRepository repository;
        private readonly JsonReturn jsonReturn;

        public TaskController()
        {
            jsonReturn = new JsonReturn();
            repository = new TaskRepository();
        }

        [HttpGet]
        public List<Task> Get()
        {
            return repository.Get();
        }

        [HttpPost]
        [Route("Insert")]
        public JsonReturn Insert([FromBody]Task task)
        {
            try
            {
                repository.Insert(task);
                jsonReturn.IsSuccess = true;
                jsonReturn.Message = "Tarefa inserida com sucesso!";
            }
            catch (Exception ex)
            {
                jsonReturn.IsSuccess = false;
                jsonReturn.Message = ex.Message;
            }

            return jsonReturn;
        }

        [HttpPut]
        [Route("Update")]
        public JsonReturn Update(Task task)
        {
            try
            {
                repository.Update(task);
                jsonReturn.IsSuccess = true;
                jsonReturn.Message = "Tarefa atualizada com sucesso!";
            }
            catch (Exception ex)
            {
                jsonReturn.IsSuccess = false;
                jsonReturn.Message = ex.Message;
            }

            return jsonReturn;
        }

        [HttpPut]
        [Route("Complete/{id}")]
        public JsonReturn Complete(long id)
        {
            try
            {
                repository.Complete(id);
                jsonReturn.IsSuccess = true;
                jsonReturn.Message = "Tarefa completada com sucesso!";
            }
            catch (Exception ex)
            {
                jsonReturn.IsSuccess = false;
                jsonReturn.Message = ex.Message;
            }

            return jsonReturn;
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public JsonReturn Delete(long id)
        {
            try
            {
                repository.Delete(id);
                jsonReturn.IsSuccess = true;
                jsonReturn.Message = "Tarefa apagada com sucesso!";
            }
            catch (Exception ex)
            {
                jsonReturn.IsSuccess = false;
                jsonReturn.Message = ex.Message;
            }

            return jsonReturn;
        }

        [HttpPut]
        [Route("Archive/{id}")]
        public JsonReturn Archive(long id)
        {
            try
            {
                repository.Archive(id);
                jsonReturn.IsSuccess = true;
                jsonReturn.Message = "Tarefa arquivada com sucesso!";
            }
            catch (Exception ex)
            {
                jsonReturn.IsSuccess = false;
                jsonReturn.Message = ex.Message;
            }

            return jsonReturn;
        }
    }
}