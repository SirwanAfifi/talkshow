using System;
using System.Data;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("[controller]/[action]")]
    public class ApiController : Controller
    {
        private readonly IDbConnection _dbConnection;

        public ApiController(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        [HttpPost]
        public IActionResult RemindMe(RemindMeViewModel viewModel)
        {
            // Store in a DB
            try
            {
                _dbConnection.Execute("insert into dbo.lists values (@email, @phoneNumber)", 
                    new {email = viewModel.EmailAddress, phoneNumber = viewModel.PhoneNumber});
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            // Return Thank you message
            return Json($"We will keep you posted soon");
        }
    }
}