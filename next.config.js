/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['gitlab.com', 'secure.gravatar.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
