import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // BasePath is for Github Pages (no custom domain)
  // basePath: "/versaminds-marketing-website",
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'md'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: { unoptimized: true }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
