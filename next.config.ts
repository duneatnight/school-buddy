import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/timetable", destination: "/", permanent: false },
      { source: "/timetable/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
