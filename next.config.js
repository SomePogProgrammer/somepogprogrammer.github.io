/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    reactStrictMode : true,
    experimental: {
      serverActions: true,
    },
    rewrites: async () => {
        return [
          {
            source: '/',
            destination: '/index.html',
          },
        ]
    },
}

module.exports = nextConfig
// Inside next.config.js
