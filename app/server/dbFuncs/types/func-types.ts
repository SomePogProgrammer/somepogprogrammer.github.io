/**
 * 
 * @module  for-db_Funcs
 * @returns functions {
 *      convertPath,
 *      fetchDB,
 *      writeDB,
 *      readDB,
 * 
 * }
 * 
**/


import fs from "fs"
import path from "path"
import { server } from "server-globals"
import process from "process"
const API_FUNCS = server.apiFuncs
const __dirname = process.cwd() + server.api.API_ROUTES.dataRoute.ex_Path


export function convertPath(dbPath: string | URL) : string | URL  {

    if (!fs.existsSync(dbPath)) {
        dbPath = path.resolve(__dirname, `./Databases/${dbPath}`) // Converts the path to relative
        return dbPath
    } else {
        return dbPath
    }
}



export function readDB(dbName_: string | URL): object | any | Error {
    var dbName = convertPath(dbName_)

    const data = fs.readFileSync(dbName, 'utf8')
    if (data) {
        return JSON.parse(data)
    } else {
        return new Error("Database Does not Exist!")
    }
}

export function writeDB(dbName_: string | URL, RequestInfo: dbProps) {
    var dbName = convertPath(dbName_)

    if (!RequestInfo.dataToAdd) return console.log('Please provide data to save')
    try {

        var oldData = readDB(dbName) 
        var dir = oldData

        if (RequestInfo.tableLocation && dir[RequestInfo.tableLocation]) {
            dir = dir[RequestInfo.tableLocation]
        }

        var currentTime = API_FUNCS.getESTLocalTime() 
        
        var id = "id_" + btoa(Object.keys(dir).length + currentTime).split("=")[0]

        RequestInfo.dataToAdd["_id"] = id
        RequestInfo.dataToAdd["timestamp"] = currentTime
        dir[id] = RequestInfo.dataToAdd
        var fullData = oldData
        console.warn("BANANAS")
        fs.writeFileSync(dbName, JSON.stringify(fullData, null, 4))
        return ({ Message: "Saved Data Successfully", _id: id })
    } catch (err) {
        return ({ Message: "Failed To Add Data", ERROR_: err})
    }
}

export function fetchDB(dbName_: string | URL, RequestInfo?: fetchDBProps)  {
    var dbName = dbName_

    if (RequestInfo?.externalURL !== true) {
        dbName = convertPath(dbName_)
    }

    if (RequestInfo?.externalURL == false || RequestInfo?.externalURL == null) {
        if (dbName) {

            if (RequestInfo?.fetchType && RequestInfo?.fetchType.toUpperCase() == "POST") {

                return writeDB(dbName, {
                    dataToAdd: RequestInfo.dataToAdd, 
                    tableLocation: RequestInfo.tableLocation
                })
            } else {
               
                return readDB(dbName)
            }
        }
    } else if (RequestInfo?.externalURL === true) {
        console.log("External?")
        var dir = dbName

        if (RequestInfo.tableLocation) {
            dir = dbName + "/" + RequestInfo.tableLocation
        }

       return ("Cannot get")

    }

}
