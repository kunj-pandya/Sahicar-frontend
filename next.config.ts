import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marketplace-cdn.cars24.com",
      },
      {
        protocol: "https",
        hostname: "media.cars24.com",
      },
      {
        protocol: "https",
        hostname: "c2c-marketplace.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

