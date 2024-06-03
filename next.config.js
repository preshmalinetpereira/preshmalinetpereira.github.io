/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = {
    images: {
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
        { hostname: "drive.google.com"}
      ],
    },
  };

