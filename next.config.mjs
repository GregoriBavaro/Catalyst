/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: { formats: ["image/avif", "image/webp"] },
  trailingSlash: true,
};

export default nextConfig;
