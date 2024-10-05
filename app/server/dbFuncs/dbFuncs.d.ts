////    ____________ IMPORTS ____________  \\\\

import fs, { read } from "fs"
import path from "path"
import { server } from "server-globals"
import process from "process"
const API_FUNCS = server.apiFuncs
const __dirname = process.cwd() + server.api.API_ROUTES.dataRoute.ex_Path

import expr from "express"
////    ____________ MODULE VARS ____________  \\\\
import * as funcTypes from "./types/func-types"

const workspace_DbPath = server.api.API_ROUTES.dataRoute.ex_Path + "/Databases"

////    ____________ PARAMS/PROPS ____________  \\\\

declare global {
    interface fetchDBProps {
        fetchType: string,
        dataToAdd?: object | any,
        tableLocation?: string,
        externalURL?: boolean,
    } 
    interface dbProps {
        dataToAdd?: object | any,
        tableLocation?: string,
        externalURL?: boolean,
    }
}


////    ____________ MODULE ____________  \\\\

export default funcTypes.fetchDB
export const readDB = funcTypes.readDB

////    ____________ DECLARE/EXPORT ____________  \\\\


