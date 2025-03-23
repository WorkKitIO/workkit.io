import type { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: [],
    },
    sitemap: 'http://localhost:3000/sitemap.xml'
  }
}
