/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/approach', destination: '/about#method', permanent: true },
    ]
  },
}

export default nextConfig
