import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL(
                "https://knoghd9axr0c3u7g.public.blob.vercel-storage.com/**",
            ),
        ],
    },
};

export default nextConfig;
