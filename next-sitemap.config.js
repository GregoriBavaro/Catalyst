/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.catalyst.mk",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      "https://www.catalyst.mk/sitemap-portfolio.xml",
      "https://www.catalyst.mk/sitemap-services.xml",
    ],
  },
};
