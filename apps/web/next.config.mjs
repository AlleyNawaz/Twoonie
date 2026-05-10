/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },
  webpack: (config) => {
    config.externals = config.externals || [];
    return config;
  },
};

export default nextConfig;
