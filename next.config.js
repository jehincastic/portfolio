/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    DOMAIN: process.env.DOMAIN,
  },
  images: {
    domains: ["flowbite.com"],
  },
}

module.exports = nextConfig
