using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        ILogger<ClassController> _logger;
        ApiDbContext _dbContext;

        public ClassController(ApiDbContext dbContext, ILogger<ClassController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }


        [HttpGet]
        public IActionResult GetAllClasses()
        {

            try
            {
                List<Class> classes = _dbContext.Classes.ToList();

                return Ok(classes);
            }
            catch (Exception e)
            {
                _logger.Log(LogLevel.Error, "Hata");

                return Problem();

            }
            

        }

        [HttpGet("{id}")]
        public IActionResult GetClassById(int id)
        {

            var item = _dbContext.Classes.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);


        }


        [HttpPost]
        public IActionResult CreateClass(string name)
        {
            IQueryable<Class> query = _dbContext.Classes.Where(n=>n.Name==name);
            if (query.Any())
            {
                return UnprocessableEntity("Bu sınıf daha önceden oluşturulmuş");
            }

            try
            {
                var c = new Class
                {
                    Name = name
                };

                _dbContext.Classes.Add(c);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
               _logger.LogError(ex,"Hata");
               return Problem();
            }

            return Ok();

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteClass(int id)
        {

            var classToDelete = _dbContext.Classes.FirstOrDefault(c => c.Id == id);
            _dbContext.Classes.Remove(classToDelete);
            _dbContext.SaveChanges();
            return Ok();


        }

        [HttpPut("{id}")]
        public ActionResult UpdateClass(int id, [FromBody] Class item)
        {
            if (item==null||item.Id!=id)
            {
                return BadRequest();
            }

            var classToUpdate = _dbContext.Classes.FirstOrDefault(c => c.Id == id);

            if (classToUpdate==null)
            {
                return NotFound();
            }

            classToUpdate.Name = item.Name;
            _dbContext.Classes.Update(classToUpdate);
            _dbContext.SaveChanges();
            return Ok();


        }



    }
}
