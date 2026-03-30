import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    { url: base,                              lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`,                lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
