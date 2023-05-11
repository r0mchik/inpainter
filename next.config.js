/** @type {import('next').NextConfig} */
const { Network } = require('lucide-react');
const withPWA = require("next-pwa");
import runtimeCaching from 'next-pwa/cache.js';
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["replicate.com", "replicate.delivery"],
  },
  
}




const config = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  disable: !isProduction,
  runtimeCaching
})(
  nextConfig
);

module.exports = nextConfig
export default config;