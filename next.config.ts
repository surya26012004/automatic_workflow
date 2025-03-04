import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right', // You can change the position or disable it
  },
};

export default nextConfig;
