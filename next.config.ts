/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan ini agar popup login diizinkan oleh browser
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;