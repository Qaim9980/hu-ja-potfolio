/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hu-ja-potfolio',
  assetPrefix: '/hu-ja-potfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
