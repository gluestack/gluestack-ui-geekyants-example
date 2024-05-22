import { withGluestackUI } from '@gluestack/ui-next-adapter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['nativewind', 'react-native-css-interop'],
  images: {
    domains: ['geekyants.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'geekyants.com',
    //     port: '',
    //     pathname: '/',
    //   },
    // ],
  },
  webpack: (config) => {
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      '.web.jsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

export default withGluestackUI(nextConfig);
