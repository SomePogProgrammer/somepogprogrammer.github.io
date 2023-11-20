import "../../../globals.scss";
import '../../scss/request.scss'
import "../../../page.scss";
import {readDB} from "dbfuncs"
import _RequestPage from "./_page"
import NotFound from "../../../not-found"
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
    //const data = await readDB("Portfolio_Data.json")
    const {DB_Data} = await fetch("https://portfolio-api-backend.vercel.app/server/api/primaryRoute/Portfolio_Data/Job_Requests/Fetch",{method: "GET"}).then(async(res) => {return await res.json()})
    const map = Object.entries(DB_Data.Job_Requests)
    const result = map.map((entry) => {

        return {
            _id: entry[1]._id
        }
    })
    console.log("res", result)
    return result;
}
generateStaticParams()

export default function RequestPage({ params }) {
    const { _id } = params
    
    if (!_id) {
        notFound()
    }
    return (

    <_RequestPage _id={params._id}></_RequestPage>

    )
}