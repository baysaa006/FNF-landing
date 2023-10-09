/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "localhost:3000",
        pathname: "/account123/**",
      },
    ],
    domains: ["www.fnf.mn"],
  },
};
module.exports = nextConfig;
