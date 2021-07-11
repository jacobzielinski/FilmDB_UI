/// <reference path="../knockout.d.ts" />
/// <reference path="../jquery.d.ts" />
/// <reference path="../Interfaces/HomeInterfaces.ts" />
/// <reference path="../Repositories/HomeRepository.ts" />
/// <reference path="../ModelInterfaces/ModelInterfaces.ts" />

module TT {

    export class HomeViewModel {

        public textTest = ko.observable<string>("This frontend for api calls is build with .NET, Knockout.JS and TypeScript.");
        public resultString = ko.observable<string>();
        public films = ko.observableArray<IFilm>();
        public film = ko.observable<IFilm>();
        public mappedFilms = ko.observableArray<IFilm>();

        public GetAllFilmsForUser = () => {
            this.repository.getListForUser()
                .done((result) => {

                    console.log(result.data); //map to Knockout Observable

                    var myResultString = JSON.stringify(result);
                    this.resultString(myResultString);
                    if (result.succeeded) {
                }
                    else {

                    }
                })
        }

        constructor(public repository: IApiRepository) {
            this.textTest();
            this.resultString();
        }

    }
}