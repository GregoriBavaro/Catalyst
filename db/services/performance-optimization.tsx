import { stackingCards } from "../../config/animations";

import code from "../../public/images/icons/code.png";
import web from "../../public/images/icons/web.png";
import responsive from "../../public/images/icons/responsive.png";

export const performanceOptimization = {
  description:
    "Keep your website secure and up-to-date with regular updates, backups, and performance monitoring.",

  componentSubHeader: "Experts in Website Maintenance",
  componentHeader: "Is your website performing at its best and staying secure?",
  componentDescription:
    "A well-maintained website is crucial for ensuring smooth performance, security, and user satisfaction. Our website maintenance services include regular updates, backups, and performance monitoring, allowing you to focus on your core business activities. We handle all technical aspects, ensuring your website remains secure, up-to-date, and optimized for peak performance. This way, you can have peace of mind knowing your online presence is in expert hands.",
  componentCardHeader: "Our website maintenance services",
  serviceData: [
    {
      id: 0,
      icon: code,
      title: "Custom development.",
      description: "Using next generation frameworks like Next.js",
      ...stackingCards.cardOne,
    },
    {
      id: 1,
      icon: web,
      title: "SEO",
      description: "SEO-friendly websites with server-side rendering and static site generation.",
      ...stackingCards.cardTwo,
    },
    {
      id: 2,
      icon: responsive,
      title: "Responsive design",
      description:
        "Responsive design makes websites work well on any device by adjusting layouts and images automatically.",
      ...stackingCards.cardThree,
    },
  ],
  services: [
    {
      id: 0,
      title: "Custom development",
      animationDelay: 0.1,
      description:
        "At Catalyst we provide custom development services, creating websites and web applications from the ground up using HTML, CSS, JavaScript, React, and frameworks like Next.js. This method offers unmatched flexibility and control, enabling us to develop highly tailored solutions that perfectly align with the unique needs of our clients or projects.",
    },
    {
      id: 1,
      title: "Responsive design",
      animationDelay: 0.2,
      description:
        "We specialize in crafting responsive designs using Next.js and SCSS, ensuring that your websites and web applications adapt seamlessly to various screen sizes and devices. Leveraging Next.js's dynamic capabilities and SCSS's powerful styling features, we create visually stunning and highly functional designs that engage users across all platforms.",
    },
    {
      id: 2,
      title: "Landing pages",
      animationDelay: 0.3,
      description:
        "We specialize in creating custom landing pages using Next.js, designed to captivate visitors and drive conversions. Next.js offers powerful features such as server-side rendering (SSR) and static site generation (SSG), ensuring that your landing pages load quickly and perform exceptionally well across all devices.",
    },
    {
      id: 3,
      title: "SEO",
      animationDelay: 0.4,
      description:
        "At Catalyst we offer specialized SEO services, leveraging the power of Next.js to optimize websites and web applications for maximum search engine visibility and organic traffic growth. Next.js provides server-side rendering (SSR) and static site generation (SSG), which are crucial for improving SEO performance.",
    },
    {
      id: 4,
      title: "UI/UX Design",
      animationDelay: 0.5,
      description:
        "At Catalyst, we specialize in creating captivating user experiences through innovative UI/UX design. Our custom solutions are crafted to engage users and drive results, ensuring seamless interaction and maximum satisfaction. Elevate your digital presence with our tailored approach to UI/UX.",
    },
    {
      id: 5,
      title: "Performance Optimization",
      animationDelay: 0.6,
      description:
        "We specialize in optimizing website performance to ensure lightning-fast load times and seamless user experiences. Our expert team implements a range of strategies, from code optimization to server configuration, to maximize speed and efficiency. Elevate your online presence with our performance optimization solutions.",
    },
    {
      id: 6,
      title: "Analytics and Tracking",
      animationDelay: 0.1,
      description:
        "At Catalyst, we specialize in implementing comprehensive analytics and tracking solutions to provide valuable insights into user behavior and website performance. From setting up Google Analytics to advanced tracking systems, we help you make data-driven decisions and drive growth. Harness the power of analytics with our tailored solutions.",
    },
  ],
};
