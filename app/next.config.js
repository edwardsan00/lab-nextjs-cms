/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@dynamic-page-renderer/ui"],
  distDir: "dist",
  experimental: {
    typedRoutes: true,
    webpackBuildWorker: true,
  },
};

module.exports = nextConfig;
