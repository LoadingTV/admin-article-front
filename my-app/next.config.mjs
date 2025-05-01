/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000") + "/api",
      },
    ];
  },
};

export default nextConfig;
