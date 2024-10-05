// https://someprogrammer.github.io/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/pages/JobRequests/id_MjExLzE5LzIwMjMsIDg6Mjc6NTYgUE0gbXM6IDE1Ng/&secret=d767627e5eed76fc99f9634060adc7abd39454a33ed4cbf7accf716007327b0b328b0d48e34c0f5687b3778305dcef88290720450565cfd851e561c14e9ae38ec95f_
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