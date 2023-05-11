/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["replicate.com", "replicate.delivery"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});