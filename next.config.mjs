/** @type {import('next').NextConfig} */
const githubPagesBasePath = process.env.GITHUB_ACTIONS ? '/digos-job-board-website' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Next.js prefixes routed links automatically; public URLs need this value too.
  basePath: githubPagesBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
  },
};

export default nextConfig;
