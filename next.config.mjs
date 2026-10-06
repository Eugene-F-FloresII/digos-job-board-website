/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Automatically handle basePath if running on GitHub Pages
  basePath: process.env.GITHUB_ACTIONS ? '/digos-job-board-website' : '',
};

export default nextConfig;
