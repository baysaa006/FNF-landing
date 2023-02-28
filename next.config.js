/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "localhost:3000",
        pathname: "/account123/**",
      },
    ],
    domains: ["media.graphassets.com"],
  },
};
module.exports = nextConfig;
