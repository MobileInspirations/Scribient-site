import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: `${process.env.NEXT_PUBLIC_APP_URL || "https://app.scribient.ai"}/login`,
        permanent: false,
      },
      {
        source: "/app/:path*",
        destination: `${process.env.NEXT_PUBLIC_APP_URL || "https://app.scribient.ai"}/:path*`,
        permanent: false,
      },
      {
        source: "/checkout/:path*",
        destination: "/demo",
        permanent: false,
      },
      {
        source: "/concierge",
        destination: "/pricing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
