/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // 如果需要从外部域名加载图片，在这里添加域名
  },
  // 如果需要添加其他配置，在这里添加
}

module.exports = nextConfig 