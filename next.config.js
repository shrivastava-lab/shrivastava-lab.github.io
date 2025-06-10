/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // if you're using next/image
  basePath: isGithubPages ? '/shrivastava-lab.github.io' : '',
  assetPrefix: isGithubPages ? '/shrivastava-lab.github.io/' : '',
};

module.exports = nextConfig;
