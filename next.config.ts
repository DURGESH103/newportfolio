import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 shows a "DevTools" indicator badge by default, including in
  // production builds. This portfolio should never show development UI.
  devIndicators: false,
};

export default nextConfig;
