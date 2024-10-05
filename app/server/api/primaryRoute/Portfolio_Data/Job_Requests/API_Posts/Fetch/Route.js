import { NextResponse } from "next/server"
import { server, primaryRoute } from "server-globals"
import fetchDB from "dbfuncs"

export async function GET(req) {

    if (req.method == "GET") {
        var data = fetchDB("Portfolio_Data.json",{fetchType: req.method})

    }
    return NextResponse.json({ "message": "Hi", "The Method": req.method, DB_Data: data })
}


export async function POST(req) {
    console.log("THIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIS")
    const data = await req.json()
    

    if (req.method == "POST") {
      
       var _data = fetchDB("Portfolio_Data.json", {
            fetchType: req.method,
            dataToAdd: data,
            tableLocation: "Job_Requests"
        })
        
        console.log(data,_data)
        
        if (data) {

            var redirURL = req.url.split("/Fetch")[0] + `/${_data._id}`
         
            _data["URL_To_Fetch"] = redirURL

            return (NextResponse.json(_data))
        }

    } else {
    return NextResponse.json({ "message": "Hi", "The Method": [req.method] })
    }
}


