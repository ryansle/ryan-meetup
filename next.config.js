/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Mailerlite
    NEXT_PUBLIC_MAILER_GROUP_ID: process.env.NEXT_PUBIC_MAILER_GROUP_ID,
    NEXT_PUBLIC_MAILER_API_TOKEN: process.env.NEXT_PUBLIC_MAILER_API_TOKEN,
    // Emailjs
    NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_USER_ID: process.env.NEXT_PUBLIC_USER_ID,
    NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    // Contentful
    NEXT_PUBLIC_CONTENTFUL_BASE_URL: process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL,
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
        port: '',
      }
    ],
  },
};

module.exports = nextConfig;
