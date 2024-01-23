/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
        ],
      },
};

export default nextConfig;
