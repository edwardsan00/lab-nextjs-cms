/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@dynamic-page-renderer/ui"],
  experimental: {
    typedRoutes: true,
    webpackBuildWorker: true,
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
