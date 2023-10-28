import {readDB} from "dbfuncs"
import _RequestPage from "./_page"
import NotFound from "../../../not-found"
import { notFound } from 'next/navigation'
import '../../scss/request.scss'
import "../../../page.scss";
import "../../../globals.scss";

export async function generateStaticParams() {
    const data = await readDB("Portfolio_Data.json")
    const map = Object.entries(data.Job_Requests)
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