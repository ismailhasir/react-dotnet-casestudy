using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Model;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    public class TeacherController : Controller
    {
        ILogger<ClassController> _logger;
        ApiDbContext _dbContext;

        public TeacherController(ApiDbContext dbContext, ILogger<ClassController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAllTeachers()
        {
            try
            {
                List<TeacherClass> teachers = _dbContext.TeacherClasses.ToList();

                return Ok(teachers);
            }
            catch (Exception e)
            {
                _logger.Log(LogLevel.Error, "Hata");

                return Problem();

            }
        }

        [HttpGet("{id}")]
        public IActionResult GetTeacherById(int id)
        {

            var item = _dbContext.TeacherClasses.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);


        }


        [HttpPost]
        public IActionResult CreateTeacher(int teacherId)
        {
            IQueryable<TeacherClass> query = _dbContext.TeacherClasses.Where(n => n.TeacherId == teacherId);
            if (query.Any())
            {
                return UnprocessableEntity("Bu öğretmen daha önceden oluşturulmuş");
            }

            try
            {
                var t = new TeacherClass()
                {
                    TeacherId = teacherId
                };

                _dbContext.TeacherClasses.Add(t);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Hata");
                return Problem();
            }

            return Ok();

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTeacher(int id)
        {

            var teacherToDelete = _dbContext.TeacherClasses.FirstOrDefault(t => t.Id == id);
            _dbContext.TeacherClasses.Remove(teacherToDelete);
            _dbContext.SaveChanges();
            return Ok();


        }

        [HttpPut("{id}")]
        public ActionResult UpdateTeacher(int id, [FromBody] TeacherClass item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var teacherToUpdate = _dbContext.TeacherClasses.FirstOrDefault(t => t.Id == id);

            if (teacherToUpdate == null)
            {
                return NotFound();
            }

            
            teacherToUpdate.ClassId = item.ClassId;
            _dbContext.TeacherClasses.Update(teacherToUpdate);
            _dbContext.SaveChanges();
            return Ok();


        }
    }
}
