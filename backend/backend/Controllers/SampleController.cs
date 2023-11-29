using backend.Views;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using backend.Entities;
using Microsoft.EntityFrameworkCore;

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
        public string signup(UserModel model)
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
 /**
       [HttpPut]
public string UpdateInfo(UserModel model)
{
    using (var context = new dbContext())
    {
        // Retrieve the existing user from the database based on the user ID.
        var existingUser = context.Users.FirstOrDefault(u => u.Id == model.Id);

        if (existingUser != null)
        {
            // Update the properties of the existing user with the values from the model.
            existingUser.Username = model.Username;
            existingUser.Password = model.Password;
            existingUser.Fname = model.Fname;
            existingUser.Lname = model.Lname;
            existingUser.Bday = model.Bday;
            existingUser.Age = model.Age;
            existingUser.Gender = model.Gender;

            // Save the changes to the database.
            context.SaveChanges();

            return "SUCCESS";
        }

        return "User not found"; // or handle this case in a way suitable for your application.
    }
}
 */
 //retrieve data based on id
        [HttpGet]
        public ActionResult<UserModel> userprofile(int userId)
        {
            using (var context = new dbContext())
            {
                var user = context.Users.FirstOrDefault(user => user.Id ==  userId);

                if (user != null)
                {
                    // Map the entity to your UserModel
                    var userModel = new UserModel
                    {
                        //Id = user.Id,
                        Username = user.Username,
                        Password = user.Password,
                        Fname = user.Fname,
                        Lname = user.Lname,
                        //Bday = (DateOnly)user.Bday,
                        //Age = (int)user.Age,
                        //Gender = user.Gender,
                        //DateCreated = user.DateCreated
                    };

                    return Ok(userModel); // Assuming you're using ASP.NET Core and returning JSON.
                }

                return NotFound(); // User not found, return a 404 response.
            }
        }
        //for sign in
        //verify if user exist
        [HttpGet]
        public ActionResult<UserModel> signin(string username, string password)
        {
            using (var context = new dbContext())
            {
                var user = context.Users.FirstOrDefault(user => user.Username == username && user.Password == password);

                if (user != null)
                {
                    // Map the entity to your UserModel
                    var userModel = new UserModel
                    {
                        Id = user.Id

                    };

                    return Ok(userModel); // Assuming you're using ASP.NET Core and returning JSON.
                }

                return NotFound(); // User not found, return a 404 response.
            }
        }


        
    }
}
