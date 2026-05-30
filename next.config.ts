import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  // Static export for FTP deployment
  output: 'export',
  // Optimize production builds
  compress: true,
  poweredByHeader: false,
  // Generate ETags for better caching
  generateEtags: true,
  turbopack: {
    root: process.cwd(),
  },

  // Ensure proper transpilation for older browsers
  transpilePackages: ['lenis'],
};

export default nextConfig;
