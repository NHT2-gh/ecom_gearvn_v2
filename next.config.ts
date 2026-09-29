import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: [
      "file.hstatic.net",
      "cdn.hstatic.net",
      "product.hstatic.net",
      "mms.img.susercontent.com",
      "down-ws-sg.vod.susercontent.com",
      "down-zl-sg.vod.susercontent.com",
      "buildpc.gearvn.com",
      "as2.ftcdn.net",
      "i.ytimg.com",
      "yt3.ggpht.com",
    ],
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/pages/:slug",
  //       destination: "/ladi-page/pages/:slug",
  //     },
  //   ];
  // },
};

export default nextConfig;
