/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/films",
        destination: "/produktioner",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig