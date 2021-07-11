using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Web;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using TT_Education_webAPI.Data;
using TT_Education_webAPI.Helpers;
using TT_Education_webAPI.Models;

namespace TT_Education_webAPI.Controllers

{   //[Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _dbContext;


        public HomeController(ILogger<HomeController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _dbContext = db;
        }

        public IActionResult Index()
        {

            return View();
        }

        public ActionResult GetAllFilmsForUser()
        {
            var apiHelper = new ApiHelper();

            var token = apiHelper.GetAuthorizationToken();

            var getAllFilmDataForUser = apiHelper.GetAllFilms(token);

            return Json(new { getAllFilmDataForUser });
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        
        public List<IdentityUser> GetUser()
        {
            var user = _dbContext.Users.OrderBy(x => x.Id).ToList();

            return user;
        }
    }
}
