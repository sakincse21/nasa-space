/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all domains
      },
      {
        protocol: "http",
        hostname: "**", // Wildcard to allow all domains
      },
    ],
  },
};

export default nextConfig;
