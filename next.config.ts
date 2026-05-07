import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack stops walking up
  // and finding the user's global lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Placeholder imagery uses picsum while waiting on client-supplied assets.
    // Swap / extend as real asset hosts are confirmed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
