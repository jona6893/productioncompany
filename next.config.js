/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphassets.com", "themoviedb.org"],
  },
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