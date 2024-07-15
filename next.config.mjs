/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/services/:serviceId",
  //       destination: "/services/[serviceId]/page",
  //     },
  //     {
  //       source: "/portfolio/:projectId",
  //       destination: "/portfolio/[projectId]/page",
  //     },
  //   ];
  // },
};

export default nextConfig;
