import { NextResponse } from "next/server";

export async function GET(req: Request) {

    var dbFuncs = require("dbfuncs")

    var idSplit = req.url.split("/")
    var id = idSplit[idSplit.length - 1]
    var data = dbFuncs.readDB("Portfolio_Data.json")
    var res = NextResponse.json(data)
    var preciseData = data.Job_Requests[id]
    var err = "Something went wrong, but we're unsure what it is? Contact SomePogProgrammer/SomeProgrammer. "
    if (preciseData) {
        preciseData = preciseData
    } else {
        err = "This Entry was not found? If this issue persists contact me."
        return NextResponse.json({
            ERROR: err,
            _id: id,
            Message: "contact my discord: SwedishAeternum#0332, and send the _id value",
            Err_Code: "404: Entry Not Found"
        })
    }

    try {
        return NextResponse.json(data.Job_Requests[id])
    } catch {

        return NextResponse.json({
            _id: id,
            ERROR: "Value Couldn't Be Encoded",
            Message: "If this happens again contact my discord: SwedishAeternum#0332",

        })
    }

}

export async function POST() {

    return NextResponse.json({
        "null": "null", "ERROR": {
            "Error": "Cannot Post Into This Entry"
        }
    })

}
