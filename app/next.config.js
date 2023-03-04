/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
