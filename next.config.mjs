/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  // trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
