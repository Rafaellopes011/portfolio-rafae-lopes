import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    /* Os screenshots nunca são exibidos acima de ~1200px de largura real.
       Cortar os tamanhos maiores evita servir AVIF de 2x/3x para celular. */
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    /* Importa só os ícones usados, em vez do barrel inteiro do lucide. */
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
