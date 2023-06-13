/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REPLICATE_API_TOKEN: "r8_UZvwN0jknzFEWDQjVlD1pf3ZkimCQ3A1BK700"
  },
  images: {
    domains: ["replicate.com", "replicate.delivery"],
  },
}

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
  pwa: {
    dest: "public"
  },
})
module.exports = nextConfig, withPWA 

