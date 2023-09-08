const dbFuncs = require("./api/dbFuncs")

const data = {
    "Comp": "e",
    "Pay": "None lmao"
}

dbFuncs.writeDB("./api/Databases/Portfolio_Data.json",data,"Job_Requests")