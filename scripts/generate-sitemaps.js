const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.catalyst.mk";

const services = [
  "web-dev-design",
  "marketing",
  "seo",
  "website-maintenance",
  "social-media-management",
  "brand-identity",
  "social-media-automation",
];

const portfolios = [
  "sienna-pastry-boutique",
  "eco-travel-adventure",
  "green-leaf-organic-farm",
  "modern-tech-solutions",
  "urban-fit-gym",
];

const generateSitemap = (urls, filename) => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url>
    <loc>${baseUrl}${url}</loc>generate-sitemaps.js
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "..", "public", filename), sitemapContent);
};

// Generate sitemaps
generateSitemap(
  services.map((service) => `/services/${service}`),
  "sitemap-services.xml"
);
generateSitemap(
  portfolios.map((portfolio) => `/portfolio/${portfolio}`),
  "sitemap-portfolio.xml"
);
