export const structuredData = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "Catalyst",
  image: "https://catalyst.mk/logo/logo.png",
  description:
    "Catalyst delivers innovative software development and marketing solutions tailored to your business needs.",
  url: "https://catalyst.mk",
  telephone: "+38970337508",
  sameAs: ["https://www.instagram.com/catalystmacedonia/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+38970337508",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Macedonian", "Serbian"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development & Design",
          url: "https://catalyst.mk/services/web-dev-design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing",
          url: "https://catalyst.mk/services/marketing",
        },
      },
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://catalyst.mk",
  },
};
