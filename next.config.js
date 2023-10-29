const NEXT_PUBLIC_SITE_URL = require("./app/utils/detectURL.ts")
/** @type {import('next').NextConfig} */

const nextConfig = {
   // output: "export",
    env : {
        NEXT_PUBLIC_SITE_URL : NEXT_PUBLIC_SITE_URL
    },
    reactStrictMode : true,
    
}

module.exports = nextConfig
// Inside next.config.js
