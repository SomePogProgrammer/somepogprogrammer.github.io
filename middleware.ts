import { NextResponse } from "next/server"


const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['']
    : [process.env.NEXT_PUBLIC_SITE_URL,process.env.NEXT_PUBLIC_SITE_URL_,process.env.NEXT_PUBLIC_SITE_URL__]

export function middleware(request: Request) {

    const origin = request.headers.get('origin')


    if (origin && !allowedOrigins.includes(origin) || !origin) {
        return NextResponse.json(
            {
                success: false, message: `Unauthorized Fetch`,
                Non_Retorical: `Bruh. Did you really think I was too lazy to program middleware?`
            },
            { status: 403 }
        )
    }
    

   
    return NextResponse.next()
}

export const config = {
    matcher: '/server/api/:path*',
}
