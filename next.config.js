/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['gitlab.com', 'secure.gravatar.com'],
    formats: ['image/png'],
  },
};

module.exports = nextConfig;
