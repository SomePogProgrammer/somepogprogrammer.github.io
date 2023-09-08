const { warn } = require('console')
const fs = require('fs')

function readDB(dbName) {
    // read JSON object from file
    const data = fs.readFileSync(dbName, 'utf8')
    return JSON.parse(data)
}

function writeDB(dbName, obj, table) {
    if (!obj) return console.log('Please provide data to save')
    try {
      
        var oldData = readDB(dbName)
        var dir = oldData

        if (table && dir[table]) {
           dir = dir[table]
        }
        var id = "id_" + btoa(Object.keys(dir).length + (Math.random(0,1)*10 + Math.random(0,1)*25 ) * 2 + "React.JS").split("=")[0] 
        
        obj["_id"] = id
        dir[id] = obj 
        var fullData = oldData

       fs.writeFileSync(dbName, JSON.stringify(fullData,null, 4))
       
        return console.log('SAVE SUCESS')
    } catch (err) {
        return console.log('FAILED TO WRITE')
    }
}



module.exports = { readDB, writeDB }