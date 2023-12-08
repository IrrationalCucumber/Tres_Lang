using backend.Views;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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


        [HttpPost]
        public string Signup(UserModel model)
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
                });

                context.SaveChanges();
            }
            return "SUCCESS";
        }
 

        [HttpGet]
        public ActionResult<UserModel> Profile(int userId)
        {
            using (var context = new dbContext())
            {
                var user = context.Users.FirstOrDefault(user => user.Id == userId);

                if (user != null)
                {
                    return Ok(user);
                }

                return NotFound();
            }
        }

        //for sign in
        //verify if user exist
        [HttpGet]
        public ActionResult<int> SignIn(string username, string password)
        {
            using (var context = new dbContext())
            {
                var user = context.Users.FirstOrDefault(user => user.Username == username && user.Password == password);

                if (user != null)
                {
                    return Ok(user.Id);
                }

                return NotFound();
            }
        }


    }
}
