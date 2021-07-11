using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TT_Education_webAPI.Models;

namespace TT_Education_webAPI.Helpers
{
    public class ApiHelper
    {
        private readonly string _url = "https://webapijz.azurewebsites.net/api/";

        public string GetAuthorizationToken()
        {
            var url = _url + "Login/Authenticate";
            string token;

            var httpRequest = (HttpWebRequest)WebRequest.Create(url);
            httpRequest.Method = "POST";

            httpRequest.Accept = "application/json";
            httpRequest.ContentType = "application/json";

            var data = @"    {
                      ""Login"": ""my_test_login"",
                      ""Password"": ""my_test_password""
            }";

            using (var streamWriter = new StreamWriter(httpRequest.GetRequestStream()))
            {
                streamWriter.Write(data);
            }
            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                token = streamReader.ReadToEnd().Replace("\"", "");
            }

            return token;
        }

        public List<FilmModel> GetAllFilms(string token)
        {

            var url = _url + "FilmModels";

            var httpRequestAll = (HttpWebRequest)WebRequest.Create(url);

            httpRequestAll.Accept = "application/json";
            httpRequestAll.Headers["Authorization"] = $"Bearer {token}";

            var httpResponseAll = (HttpWebResponse)httpRequestAll.GetResponse();
            string getALlResult;
            using (var streamReader = new StreamReader(httpResponseAll.GetResponseStream()))
            {
                getALlResult = streamReader.ReadToEnd();
            }

            var model = JsonConvert.DeserializeObject<List<FilmModel>>(getALlResult);


            return model; //return as a json?
        }


    }
}
