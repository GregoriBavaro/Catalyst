/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  // trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
  rewrites: [
    {
      source: "/:path",
      destination: "/:path/index.html",
    },
  ],
};

export default nextConfig;
