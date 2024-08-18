const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.catalyst.mk";

const services = [
  "web-dev-design",
  "seo",
  "website-maintenance",
  "social-media-management",
  "marketing-strategy-and-planning",
  "promotional-activities",
  "events-and-promotions",
  "sales-planning-tools",
  "product-placement",
];

const portfolios = ["sienna-pastry-boutique"];

const generateSitemap = (urls, filename) => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url>
    <loc>${baseUrl}${url}</loc>
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
