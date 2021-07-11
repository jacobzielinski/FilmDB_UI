/// <reference path="../knockout.d.ts" />
/// <reference path="../jquery.d.ts" />

module TT {

    export interface IAjaxResult<T> {
        message: string;
        succeeded: boolean;
        warning: boolean;
        data: T;
    }

    export interface IApiRepository {
        getListForUser(): JQueryXHR;
        getSingleForUser(): JQueryXHR;
    }

    export interface IFilm {
        Id: number;
        Name: string;
        YearOfProduction: string;
        UserId: number;
        Genres: Array<IGenre>;
        UserNotes: string;
    }


   export interface IGenre {
        Id: number;
        GenreName: string;
   }



    
}