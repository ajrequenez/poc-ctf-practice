const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md'],
  distDir: 'dist',
  images: {
    unoptimized: true
  }
  // experimental: {
  //   scrollRestoration: true,
  // },
}

module.exports = withMarkdoc()(nextConfig)
