/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig

