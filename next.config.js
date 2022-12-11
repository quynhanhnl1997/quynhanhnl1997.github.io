/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: !debug ? 'https://quynhanhnl1997.github.io/' : ''
}

module.exports = nextConfig
