/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // if you're using next/image
  basePath: '/shrivastava-lab.github.io', // Set the base path for GitHub Pages
};

module.exports = nextConfig;
