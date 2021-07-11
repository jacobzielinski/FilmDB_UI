/// <reference path="../knockout.d.ts" />
/// <reference path="../jquery.d.ts" />
/// <reference path="../Interfaces/HomeInterfaces.ts" />
/// <reference path="../Repositories/HomeRepository.ts" />

module TT {

    export interface IAjaxResult<T> { 
        message: string;
        succeeded: boolean;
        warning: boolean;
        data: T;
    }

}