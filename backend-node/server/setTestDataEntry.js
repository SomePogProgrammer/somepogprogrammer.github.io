const dbFuncs = require("./api/dbFuncs")

const data = {
    "Comp": "e",
    "Pay": "None lmao",
    "Testing": true
}

dbFuncs.writeDB("server/api/Databases/Portfolio_Data.json",data,"Job_Requests")
