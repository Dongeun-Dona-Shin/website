/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/website',
  assetPrefix: '/website/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
