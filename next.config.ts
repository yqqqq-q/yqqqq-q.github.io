import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /**
   * Stamped once per build and inlined. Reading the clock at render time would
   * instead report whenever a page was regenerated, which drifts on the ISR
   * routes and disagrees with the fully static ones.
   */
  env: {
    BUILD_TIMESTAMP: new Date().toISOString(),
  },
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["ncdai.localhost", "ncdai.local"],
  devIndicators: false,
  experimental: {
    // Rewrite barrel imports to deep imports so a single icon doesn't pull the
    // whole package into the module graph. Next already optimizes lucide-react,
    // @tabler/icons-react, date-fns and lodash-es by default; these are the
    // heavy icon packages this app uses that are NOT on that default list.
    optimizePackageImports: [
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
      "@phosphor-icons/react",
      "@remixicon/react",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
  async redirects() {
    return [
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/components/:path*", destination: "/", permanent: true },
      { source: "/blocks/:path*", destination: "/", permanent: true },
      { source: "/sponsors", destination: "/", permanent: true },
      { source: "/bookmarks", destination: "/", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
      { source: "/testimonials", destination: "/", permanent: true },
      { source: "/timeline", destination: "/", permanent: true },
      { source: "/preview/:path*", destination: "/", permanent: true },
      { source: "/game", destination: "/", permanent: true },
      { source: "/wall-of-love", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
