/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack akan mendeteksi ini sebagai konfigurasi kosong dan berhenti mengeluh
  turbopack: {}, 
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;