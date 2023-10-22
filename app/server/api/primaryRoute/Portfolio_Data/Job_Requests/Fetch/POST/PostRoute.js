import { NextResponse } from "next/server"
import { server, primaryRoute } from "server-globals"
import fetchDB from "dbfuncs"


export async function POST_(req) {
    
    const data = await req.json()
    
console.log("DATA!!",data)
    if (req.method == "POST") {
      
       var _data = fetchDB("Portfolio_Data.json", {
            fetchType: req.method,
            dataToAdd: data,
            tableLocation: "Job_Requests"
        })
       
        console.log("data",_data)
        
        if (data) {

            var redirURL = req.url.split("/Fetch")[0] + `/${_data._id}`
         
            _data["URL_To_Fetch"] = redirURL
            var newData = NextResponse.json(JSON.stringify(_data))
        return newData
        }

    } else {
    return ({ "message": "Hi", "The Method": [req.method] })
    }
}