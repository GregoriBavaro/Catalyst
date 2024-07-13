/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://catalyst.mk",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.catalyst.mk/sitemap-portfolio.xml',
      'https://www.catalyst.mk/sitemap-services.xml',
    ],
  },
};
