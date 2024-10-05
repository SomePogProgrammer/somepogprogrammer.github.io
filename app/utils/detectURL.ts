const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const NEXT_PUBLIC_SITE_URL = isProduction
  ? "https://somepogprogrammer.github.io"
  : isDevelopment
  ? "http://localhost:3000"
  : "https://somepogprogrammer.github.io";

const AUTHORIZED_REQ_URL = "https://portfolio-api-backend.vercel.app";

const SECRET_ = require("crypto").randomBytes((Math.random() * 100 + 3)).toString('hex')

module.exports = [NEXT_PUBLIC_SITE_URL, AUTHORIZED_REQ_URL, SECRET_];
