import { NextRequest, NextResponse } from "next/server";
import { readDB } from "dbfuncs";
import { Job_Requests } from "../../../../../dataRoute/Databases/Portfolio_Data.json"

export async function generateStaticParams() {
    const data = await readDB("Portfolio_Data.json")
    const map = Object.entries(data.Job_Requests)
    const result = map.map((entry: any) => {

        return {
            _id: entry[1]._id
        }
    })
    return result;
}

export async function GET(req: NextRequest, { params }: { params: { _id: string } }) {
    const { _id } = params
    var dbFuncs = require("dbfuncs")


    var data = dbFuncs.readDB("Portfolio_Data.json")
    var preciseData = data.Job_Requests[_id]
    var err = "Something went wrong, but we're unsure what it is? Contact SomePogProgrammer/SomeProgrammer. "
    if (preciseData) {
        preciseData = preciseData
    } else {
        err = "This Entry was not found? If this issue persists contact me."
        return NextResponse.json({
            ERROR: err,
            _id: _id,
            Message: "contact my discord: SwedishAeternum#0332, and send the _id value",
            Err_Code: "404: Entry Not Found"
        })
    }

    try {
        return NextResponse.json(data.Job_Requests[_id])
    } catch {

        return NextResponse.json({
            _id: _id,
            ERROR: "Value Couldn't Be Encoded",
            Message: "If this happens again contact my discord: SwedishAeternum#0332",

        })
    }

}

export async function POST(req: Request, { params }: { params: { _id: string } }) {

    return NextResponse.json({
        "null": "null", "ERROR": {
            "Error": "Cannot Post Into This Entry"
        }
    })

}
/*export async function generateStaticParams() {
    const rows = readDB("Portfolio_Data.json").Job_Requests 
    var newRows: any = []
    for (var id in rows) {
        newRows[rows[id]._id]
    }
    console.log(newRows, typeof newRows,newRows.map)
  
    return newRows.map((row : any) => ({
      _id: row._id,
    }));
  }
 */



function getAllData(reqType: "path" | "props", _id?: string) {

    const data = readDB("Portfolio_Data.json")
    const map = Object.entries(data.Job_Requests)

    if (reqType == "path") {
        return map.map((entry: any) => {
            return {
                params: {
                    _id: entry[1]._id
                }
            }
        })
    }
    else if (reqType == "props" && _id) {
        return {
            /*   _id,
               ...data.JobRequests[_id]*/
            _id

        }
    }
}

/*export async function generateStaticPaths() {
    const paths = getAllData("path");
    return {
        paths,
        fallback: false,
    };
}/
/*
export async function generateStaticParams({ params }: any) {
    const postData = getAllData("props",params._id);
    console.log(postData, params)
    return {
        props: {
            postData,
        },
    };
}*/

