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
 
       [HttpPut]
        public string update_profile(int userID, UserModel model)
        {
            using (var context = new dbContext())
            {
                // Retrieve the existing user from the database based on the user ID.
                var existingUser = context.Users.FirstOrDefault(user => user.Id == userID);

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

                return "User not found";
            }
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
