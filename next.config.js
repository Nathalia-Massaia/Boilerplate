/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  nextConfig,
  experimental: {
    forceSwcTransforms: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}
//- Invalid next.config.js options detected:

//NODE_ENV=production yarn build
