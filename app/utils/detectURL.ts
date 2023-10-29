const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const NEXT_PUBLIC_SITE_URL = isProduction
  ? "https://somepogprogrammer.github.io"
  : isDevelopment
  ? "http://localhost:3000"
  : "https://somepogprogrammer.github.io";

module.exports = NEXT_PUBLIC_SITE_URL;
