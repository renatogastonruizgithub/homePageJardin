/**
 * @type {import('next').NextConfig}
 */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['localhost', 'firebasestorage.googleapis.com', "res.cloudinary.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
