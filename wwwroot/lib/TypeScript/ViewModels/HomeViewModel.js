/// <reference path="../knockout.d.ts" />
/// <reference path="../jquery.d.ts" />
/// <reference path="../Interfaces/HomeInterfaces.ts" />
/// <reference path="../Repositories/HomeRepository.ts" />
/// <reference path="../ModelInterfaces/ModelInterfaces.ts" />
var TT;
(function (TT) {
    var HomeViewModel = /** @class */ (function () {
        function HomeViewModel(repository) {
            var _this = this;
            this.repository = repository;
            this.textTest = ko.observable("This frontend for api calls is build with .NET, Knockout.JS and TypeScript.");
            this.resultString = ko.observable();
            this.films = ko.observableArray();
            this.film = ko.observable();
            this.mappedFilms = ko.observableArray();
            this.GetAllFilmsForUser = function () {
                _this.repository.getListForUser()
                    .done(function (result) {
                    console.log(result.data); //map to Knockout Observable
                    var myResultString = JSON.stringify(result);
                    _this.resultString(myResultString);
                    if (result.succeeded) {
                    }
                    else {
                    }
                });
            };
            this.textTest();
            this.resultString();
        }
        return HomeViewModel;
    }());
    TT.HomeViewModel = HomeViewModel;
})(TT || (TT = {}));
//# sourceMappingURL=HomeViewModel.js.map