using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
namespace backend.Views
{
    public class user
    {
        public int Id { get; set; }
        public string? Username { get; set; }

        public string? Password { get; set; }

        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public DateTime? Bday { get; set; }
        public int? Age { get; set; }
        public string? Gender { get; set; }


    }
}
