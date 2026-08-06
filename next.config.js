/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: 'export',
  // Base path must match your GitHub repo name
  // Your site will be at: https://Qaim9980.github.io/hu-ja-potfolio/
  basePath: '/hu-ja-potfolio',
  assetPrefix: '/hu-ja-potfolio/',
  trailingSlash: true,
  images: {
    // Required for static export — no server-side image optimization
    unoptimized: true,
    domains: ['via.placeholder.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
