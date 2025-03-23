import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://workkit.io"; // Change to your production domain

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `https://x.com/WorkKitIO`,
      lastModified: new Date(),
      priority: 0.4,
      changeFrequency: "never",
    },
    {
      url: `https://github.com/WorkKitIO/workkit.io`,
      lastModified: new Date(),
      priority: 0.4,
      changeFrequency: "never",
    },
  ];
}
