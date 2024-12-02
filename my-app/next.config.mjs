/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: process.env.NEXT_PUBLIC_API_URL + "/api",
      },
    ];
  },
};

export default nextConfig;
