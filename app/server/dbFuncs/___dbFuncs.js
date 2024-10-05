const fs = require('fs')
const path = require("path")
const process = require("process")


const server = require("server-globals").server
const API_FUNCS = server.apiFuncs
const __dirname = process.cwd() + server.api.API_ROUTES.dataRoute.ex_Path

function convertPath(dbPath) {

    if (!fs.existsSync(dbPath)) {
        dbPath = path.resolve(__dirname, `./Databases/${dbPath}`) // Converts the path to relative
        return dbPath
    } else {
        return dbPath
    }
}

function readDB(dbName_) {
    // read JSON object from file
    var dbName = convertPath(dbName_)

    const data = fs.readFileSync(dbName, 'utf8')
    if (data) {
        return JSON.parse(data)
    } else {
        return Error("Database Does not Exist!")
    }

}

function writeDB(dbName_, obj, table) {

    
    var dbName = convertPath(dbName_)
    

    if (!obj) return console.log('Please provide data to save')
    try {
        // fs.writeFileSync(dbName, JSON.stringify(obj)) //overwrites current data

        var oldData = readDB(dbName)

        var dir = oldData

        if (table && dir[table]) {
            dir = dir[table]
        }

        var currentTime = API_FUNCS.getESTLocalTime()
        var id = "id_" + btoa(Object.keys(dir).length + currentTime).split("=")[0]

        obj["_id"] = id
        obj["timestamp"] = currentTime
        dir[id] = obj
        var fullData = oldData

        fs.writeFileSync(dbName, JSON.stringify(fullData, null, 4))

        return ({ Message: "Saved Data Successfully", _id : id })
    } catch (err) {
        return ({ Message: "Failed To Add Data", ERROR_: err })
    }
}



module.exports = { readDB, writeDB }