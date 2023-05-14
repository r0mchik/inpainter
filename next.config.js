/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REPLICATE_API_TOKEN: "r8_fRM8OpTjBDzRhduRRZDJrsOIes3HlWa04ilJn"
  },
  images: {
    domains: ["replicate.com", "replicate.delivery"],
  },
});

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
});


module.exports = nextConfig

