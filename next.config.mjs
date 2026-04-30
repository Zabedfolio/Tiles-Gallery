/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all HTTPS domains
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;