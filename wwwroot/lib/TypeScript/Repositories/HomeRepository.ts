/// <reference path="../knockout.d.ts" />
/// <reference path="../jquery.d.ts" />
/// <reference path="../Interfaces/HomeInterfaces.ts" />


module TT {

    export class HomeRepository implements IApiRepository {

        public getListForUser(): JQueryXHR {
            return $.get("/Home/GetAllFilmsForUser");
        }

        public getSingleForUser(): JQueryXHR {
            return $.get("http://localhost:44354/api/FilmModel/5") //to change
        }

    }

}