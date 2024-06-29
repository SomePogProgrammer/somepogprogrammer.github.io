import "../../../globals.scss";
import '../../scss/request.scss'
import "../../../page.scss";
import _RequestPage from "./_page"
import Header from '../../../components/header'
import { getProperIds, getIdArrayed } from "./lib/JobRequests";
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
    const _validIds = await getIdArrayed()
    return _validIds
}
/*export async function generateStaticParams() {
    //const data = await readDB("Portfolio_Data.json")
    const data = await fetch("https://portfolio-api-backend.vercel.app/server/api/primaryRoute/Portfolio_Data/Job_Requests/Fetch",{method: "GET"}).then(async(res) => {return await res.json()})
   console.log("DATA", await fetch("https://portfolio-api-backend.vercel.app/server/api/primaryRoute/Portfolio_Data/Job_Requests/Fetch",{method: "GET"}).then(async(res) => {return await res.json()})
   )
    const map = Object.entries(data.DB_Data.Job_Requests)
    const result = map.map((entry) => {

        return {
            _id: entry[1]._id,
        }
    })
    console.log("res", result)
    console.log("TEMP SECRET", process.env.SECRET_)
    return result;
}*/
/*generateStaticParams()*/



/*export async function getStaticPaths() {

    const data = await fetch("https://portfolio-api-backend.vercel.app/server/api/primaryRoute/Portfolio_Data/Job_Requests/Fetch", { method: "GET" }).then(async (res) => { return await res.json() })
    console.log(data)
    const map = Object.entries(data.DB_Data.Job_Requests)
    const result = map.map((entry) => {

        return `/pages/JobRequests/${entry[1]._id}`

    })
    //console.log("res", result)
    //console.log("TEMP SECRET", process.env.SECRET_)
    return { paths: result, fallback: true };

}*/



export default async function RequestPage({ params }) {
    const { _id } = params
    const {_validIds, _dataTable } = await getProperIds()
    const jobRequest = _dataTable[_id] 
    
    !_validIds.includes(_id) && notFound() + alert("Wait 10-15 Seconds and Refresh, If the issue persists please contact me via Email or Discord. \n Email: quincy.m.dack@gmail.com \n Discord: SwedishAeternum")

    
    
    
    return (
        <div className="request-container w-full h-full absolute">
            <Header></Header>
            <div className="banner"></div>
            <div className="inner-request-container bg-[#979797] rounded-xl flex-auto mx-auto w-full md:w-3/6 h-full">
                <div className="id-status-container text-center">
                    <h1 className="font-source-code-pro text-white">WORK IN PROGRESS</h1>
                    {jobRequest && <span>Request Id: {jobRequest._id != null ? jobRequest._id : _id}</span>}
                </div>
            </div>
        </div>

    )
}

