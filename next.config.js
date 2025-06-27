/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable WebGL support
  webpack: (config, { isServer }) => {
    // Add Three.js and other 3D library aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/': 'three/examples/jsm/'
    };

    // Important: return the modified config
    return config;
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['vercel.com', 'www.datocms-assets.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    // Add any experimental features here if needed
  },
  transpilePackages: ['@tremor/react'],
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false
      };
    }
    return config;
  },
  // External packages that should be processed by Webpack
  serverExternalPackages: []
}

module.exports = nextConfig
