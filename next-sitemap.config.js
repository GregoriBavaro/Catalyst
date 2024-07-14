/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://catalyst.mk",
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      "https://www.catalyst.mk/sitemap-portfolio.xml",
      "https://www.catalyst.mk/sitemap-services.xml",
    ],
    // Optional, if you want to add comments or specific directives
    // include more fields as necessary
  },
};
