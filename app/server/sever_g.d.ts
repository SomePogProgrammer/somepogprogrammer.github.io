/** 
 * 
 * TYPES, NAMESPACE, AND MODULE MADE BY
 * @SomePogProgrammer
 * 
 * @author SomePogProgrammer
 * 
 *  THIS FILE IS A PREVIOUS VERISON OF MY CUSTOM PACKAGE: 'SERVER-GLOBALS'
 * 
 * Functionality: 
 * @namespace server => All custom Server Types
 * 
**/



interface serverContainer {
    api: namespace,
}

interface server {
    api: namspace,
    primaryRoute: namespace,
}


export namespace server {


    export namespace api {

        /** 
         * 
         * Defines the 2 Current Routes, Primary and Data
         * @property {primaryRoute} object = API Functions/Modules, includes DB Fetch Funcs
         * @property {dataRoute} object = Databases (GET + POST), includes DB Handlers + JSON
         * 
        **/

        export const API_ROUTES = {

            /**
             * 
             * @property {} object, API Functions/Modules, includes DB Fetch Funcs
             * 
            */
            primaryRoute: {

                /**  @type {string} Relative Path */

                rel_Path: "/server/api/primaryRoute",

                /** @type {string} Exact/Absolute Path */

                ex_Path: "/app/server/api/primaryRoute",
            },

            dataRoute: {

                /** @type {string} Relative Path */

                rel_Path: "/server/api/dataRoute",

                /** @type {string} Exact/Absolute Path */

                ex_Path: "/app/server/api/dataRoute",
            }

        };
        
        
        

        export function useDataRoute(databaseName: string, routeParams): Promise<string | object> {
            var dbFuncs = require(API_ROUTES.dataRoute.rel_Path + "/dbFuncs")

            if (routeParams) {

            }

        }





        // ^ Browken prowmise :( 

    }


}



export namespace primaryRoute {

    /**   @types > Types for Primary API Includes Types for Primary DB API */
    namespace Interfaces {

        var Job_Requests : import("./interfaces/types").Job_Requests;
        var Interview_Requests : import("./interfaces/types.ts").Interview_Requests;
        var ResponseError = import("./interfaces/types").ResponseError;
    };

   
    /**   @function > Function to require Primary API */

    export  function usePrimaryRoute(moduleName: string): Promise<any> {

    }
}

export namespace dataRoute {


    interface routeParams {
        fetch_Method: string,
        tableLocation?: string,
        data?: object | any,
    }

    export function useDataRoute(databaseName: string, routeParams): Promise<string | object> {
        var dbFuncs = require(API_ROUTES.dataRoute.rel_Path + "/dbFuncs")

        if (routeParams) {

        }

    }
}



/** @TYPES */


export type Job_Requests = import("./interfaces/types").Job_Requests;
export type Interview_Requests = import("./interfaces/types.ts").Interview_Requests;
export type ResponseError = import("./interfaces/types").ResponseError;