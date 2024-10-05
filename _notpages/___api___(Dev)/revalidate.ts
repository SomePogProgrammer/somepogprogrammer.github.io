// https://someprogrammer.github.io/api/revalidate?secret=<token>
/*
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("TEMP SECRET", process.env.SECRET_)
    if (req.query.secret !== process.env.SECRET_) {
        return res.status(401).json({error_: "401", message: "Invalid _Id"})
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({revalidated: true})
}

*/
