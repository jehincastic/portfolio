/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    DOMAIN: process.env.DOMAIN,
  },
}

module.exports = nextConfig
