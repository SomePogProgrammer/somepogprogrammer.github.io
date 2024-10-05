/** 
 * 
 * TYPES, NAMESPACE, AND MODULE MADE BY
 * @SomePogProgrammer
 * 
 * @author SomePogProgrammer
 * 
 * 
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

    /**
    * @namespace That Defines, API Routes, and API Functions
    */

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

    /**
    * @namespace That Organizes Utility Functions 
    */

    export namespace apiFuncs {

        /**
        * @function {} That Returns the Current Time In EST
        * @returns Date
        */
        interface getTimeVars {
            getMS?: boolean, /**boolean -> Get Milisecond */
            getSec?: boolean, /**boolean -> Get Second */
            getMin?: boolean, /**boolean -> Get Minute */
            getHr?: boolean, /**boolean -> Get Hour */
            getDy?: boolean, /**boolean -> Get Day of the Month */
            getDyW?: boolean, /**boolean -> Get Day of the Week */
            getMon?: boolean, /**boolean -> Get Month */
            getYr?: boolean, /**boolean -> Get Year */
            objectFormat?: boolean, /**boolean -> Returns an object of all requests instead of a string */
            getRawTime?: boolean, /**boolean -> Returns the raw time */
        }

        export function getESTLocalTime(options?: getTimeVars) : any | string | object | number {

            var date = new Date();
            const offset = date.getTimezoneOffset();
            const offsetSummer = new Date("2023-02-01").getTimezoneOffset();
            const adjustedOffset = (offset/60) * -1
            const adjustedSummerOffset = (offsetSummer/60) * -1
            var estOffset = -5;

            if (adjustedOffset == adjustedOffset) {
                estOffset = -4
            } else {
                estOffset = -5
            }
            const hoursOffset = offset / 60;


            const estHours = hoursOffset + estOffset;
            const estTime = new Date(date.getTime() + estHours * 60 * 60 * 1000);

            const estTimeString = estTime.toLocaleString() + " ms: " + estTime.getMilliseconds().toLocaleString()
            
            if (!options) {
                return estTimeString
            }
            else if (options) {
                var stringToReturn = ""
                var objectToReturn = {}
                if (options.objectFormat != true & options.objectFormat == false) {

                    options.getMS == true ? (stringToReturn = stringToReturn + "\n Current Millisecond: " + estTime.getMilliseconds()) : stringToReturn = stringToReturn,
                        options.getSec == true ? (stringToReturn = stringToReturn + "\n Current Second : " + estTime.getSeconds()) : stringToReturn = stringToReturn,
                        options.getMin == true ? (stringToReturn = stringToReturn + "\n Current Minute : " + estTime.getMinutes()) : stringToReturn = stringToReturn,
                        options.getHr == true ? (stringToReturn = stringToReturn + "\n Current Hour : " + estTime.getHours()) : stringToReturn = stringToReturn,
                        options.getDy == true ? (stringToReturn = stringToReturn + "\n Current Day of The Month : " + estTime.getDate()) : stringToReturn = stringToReturn,
                        options.getDyW == true ? (stringToReturn = stringToReturn + "\n Current Day of The Week : " + estTime.getDay()) : stringToReturn = stringToReturn,
                        options.getMon == true ? (stringToReturn = stringToReturn + "\n Current Month : " + estTime.getMonth()) : stringToReturn = stringToReturn,
                        options.getYr == true ? (stringToReturn = stringToReturn + "\n Current Year: " + estTime.getFullYear()) : stringToReturn = stringToReturn

                    return stringToReturn
                }
                else if (options.objectFormat == true) {
                    options.getMS == true ? (objectToReturn["Current Millisecond"] = estTime.getMilliseconds()) : objectToReturn = objectToReturn,
                        options.getSec == true ? (objectToReturn["Current Second"] = estTime.getSeconds()) : objectToReturn = objectToReturn,
                        options.getMin == true ? (objectToReturn["Current Minute"] = estTime.getMinutes()) : objectToReturn = objectToReturn,
                        options.getHr == true ? (objectToReturn["Current Hour"] = estTime.getHours()) : objectToReturn = objectToReturn,
                        options.getDy == true ? (objectToReturn["Current Day of The Month"] = estTime.getDate()) : objectToReturn = objectToReturn,
                        options.getDyW == true ? (objectToReturn["Current Day of The Week"] = estTime.getDay()) : objectToReturn = objectToReturn,
                        options.getMon == true ? (objectToReturn["Current Month"] = estTime.getMonth()) : objectToReturn = objectToReturn,
                        options.getYr == true ? (objectToReturn["Current Year"] = estTime.getFullYear()) : objectToReturn = objectToReturn
                    return objectToReturn
                }
                else if (options.getRawTime = true) {
                    return estTime.getTime()
                }
            } 
            
        }
    }
}



export namespace primaryRoute {

    /**   @types > Types for Primary API Includes Types for Primary DB API */
    namespace Interfaces {

        var Job_Requests: import("./interfaces/types").Job_Requests;
        var Interview_Requests: import("./interfaces/types").Interview_Requests;
        var ResponseError = import("./interfaces/types").ResponseError;
    };


    /**   @function > Function to require Primary API */

    export function usePrimaryRoute(moduleName: string): Promise<any> {

    }
}

export namespace dataRoute {


    interface routeParams {
        fetch_route: string
        fetch_Method: string,
        tableLocation?: string,
        data?: object | any,
    }

    export async function  useDataRoute(databaseName: string, routeParams): Promise<Request | Response> {
        var dbFuncs = require(API_ROUTES.dataRoute.rel_Path + "/dbFuncs")

        if (routeParams.fetch_Method == "GET") {
          
        } else if (routeParams.fetch_Method == "POST") {

        }

    }
}



/** @types and @constants */

const api_RequestTime_Limit_ = 25000

/** @module_exports */
export type JobRequests = import("./interfaces/types").Job_Requests;
export type InterviewRequests = import("./interfaces/types").Interview_Requests;
export type ResponseError = import("./interfaces/types").ResponseError;
export var DefaultJobRequests = {
    companyName: "default",
    contactType: "default",
    contacts: "default",
    jobDescription: "default",
    jobRole: "default",
    jobType: "default",
    hours: "default",
    paymentMethod: "default",
    payment: "default",
}
export const apiFuncs = server.apiFuncs
export const api_RequestTime_Limit = api_RequestTime_Limit_
