using backend.Views;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using backend.Entities;

namespace backend.Controllers
{
    [Route("[action]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        [HttpGet]
        public List<string> Sample()
        {
            List<string> list = new List<string> { "first", "second", "third", "fourth", "fifth", "sixth" };

            return list;
        }

        [HttpGet]
        public string Duhig(string name)
        {
            return "WELCOME " + name;
        }


        [HttpPost]

        public string user(UserModel model)
        {
            using (var context = new dbContext())
            {
                context.Users.Add(new user
                {
                    Username = model.Username,
                    Password = model.Password,
                    Fname = model.Fname,
                    Lname = model.Lname,
                    Bday = model.Bday,
                    Age = model.Age,
                    Gender = model.Gender,
                    DateCreated = model.DateCreated,
                });

                context.SaveChanges();
            }
            return "SUCCESS";
        }

        [HttpPost]
        public string entry(entryModel model)
        {
            using (var context = new dbContext())
            {
                context.Entry.Add(new entry
                {
                    Title = model.Title,
                    Description = model.Description,
                    Location = model.Location,
                    Date = model.Date,
                    Type = model.Type,
                    Url = model.Url,
                    DatePosted = model.DatePosted,
                });

                context.SaveChanges();
            }
            return "SUCCESS";
        }

    }
}
