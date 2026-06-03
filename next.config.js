/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages (edge runtime)
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'praisepause.com', 'www.praisepause.com'],
    },
  },
  images: {
    // Cloudflare Pages doesn't support Next.js Image Optimization — use unoptimized
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
