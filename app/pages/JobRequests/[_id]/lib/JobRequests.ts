import {getRef} from "../../../../utils/getDBref";

export async function getProperIds() {
    /*var reqHeaders = new Headers();
    reqHeaders.append('cache-control', 'no-store');
    var requestConfig = {
        method: "GET",
        headers: reqHeaders
    }
    var request = new Request("https://portfolio-api-backend.vercel.app/server/api/primaryRoute/Portfolio_Data/Job_Requests/Fetch")
    const fetchReq = await fetch(request, requestConfig).then(async (res) => {
        return res.json()
    })
    console.log(fetchReq)
    const dataTable = fetchReq.DB_Data*/
    var ref = await getRef()
    var dataTable = await ref.get().then((snapshot : any) => {
        return snapshot.val()
    }).then((value : any) => {return value}) 

    const map = Object.entries(dataTable.Job_Requests)
    const result = map.map((entry: any) => {
        return entry[1]._id
    })
    console.log(result)

    return {
        _validIds: result,
        _dataTable: dataTable.Job_Requests
    }

}

export async function getIdArrayed() {
    var ref = await getRef()
    var dataTable = await ref.get().then((snapshot : any) => {
        return snapshot.val()
    }).then((value : any) => {return value}) 

    const map = Object.entries(dataTable.Job_Requests)
    const result = map.map((entry: any) => {
        return {
            _id: entry[1]._id
        }
    })

    return result
}