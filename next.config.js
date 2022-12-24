/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    // loader: 'custom',
    // loaderFile: './components/_common/CloudinaryImage.ts',
  },
};

module.exports = nextConfig;
