/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@fortawesome/fontawesome-svg-core'],
  },
  // Enable gzip compression
  compress: true,
};

module.exports = nextConfig;
