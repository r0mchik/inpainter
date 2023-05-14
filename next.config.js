/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa');

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REPLICATE_API_TOKEN: "r8_fRM8OpTjBDzRhduRRZDJrsOIes3HlWa04ilJn"
  },
  images: {
    domains: ["replicate.com", "replicate.delivery"],
  },
  pwa: {
    dest: "public"
  },
})