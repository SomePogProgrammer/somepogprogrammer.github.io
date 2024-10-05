const [NEXT_PUBLIC_SITE_URL,AUTHORIZED_REQ_URL,SECRET_] = require("./app/utils/detectURL.ts")
/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    env : {
        NEXT_PUBLIC_SITE_URL : NEXT_PUBLIC_SITE_URL,
        AUTHORIZED_REQ_URL: AUTHORIZED_REQ_URL,
        SECRET_ : SECRET_
    },
    reactStrictMode : true,
    
}

module.exports = nextConfig
// Inside next.config.js
