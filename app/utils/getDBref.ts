
import { getDatabase } from "firebase-admin/database"
import admin from "firebase-admin"

export async function getRef() {
    var fet = await fetch("https://portfolio-api-backend.vercel.app/server/api/getDB",{headers: {auth : "RnJvbSBzb21lcG9ncHJvZ3JhbW1lci5naXRodWIuaW8="}}).then(async (res) => { return await res.json() })
    if (!admin.apps.length) {
        admin.initializeApp({
            
            credential: admin.credential.cert(fet), databaseURL: "https://portfolio-api-and-backend-default-rtdb.firebaseio.com/",
        })

    }
   
    var database = getDatabase()
    var ref = database.ref("/")
    return ref
}
