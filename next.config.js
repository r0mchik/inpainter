/** @type {import('next').NextConfig} */
const { Network } = require('lucide-react');
const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["replicate.com", "replicate.delivery"],
  },
  
}

module.exports = nextConfig


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

export default config;