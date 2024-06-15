import { webDevDesign } from "./web-dev-design";
import { performanceOptimization } from "./performance-optimization";
import { seo } from "./seo";
import { marketing } from "./marketing";
import { socialMedia } from "./social-media";
import { brandIdentity } from "./brand-identity";
import { socialMediaAutomation } from "./social-media-automation";

export const SERVICES = [
  {
    id: 0,
    animationDelay: 0.1,
    animationDelayContact: 0.1,
    title: "Web development & design",
    pathId: "web-dev-design",
    path: "/services/web-dev-design",
    ...webDevDesign,
  },
  {
    id: 1,
    animationDelay: 0.2,
    animationDelayContact: 0.2,
    title: "Website maintenance",
    pathId: "website-maintenance",
    path: "/services/website-maintenance",
    ...performanceOptimization,
  },
  {
    id: 2,
    animationDelay: 0.3,
    animationDelayContact: 0.3,
    title: "SEO",
    pathId: "seo",
    path: "/services/seo",
    ...seo,
  },
  {
    id: 3,
    animationDelay: 0.1,
    animationDelayContact: 0.4,
    title: "Marketing",
    pathId: "marketing",
    path: "/services/marketing",
    ...marketing,
  },
  {
    id: 4,
    animationDelay: 0.2,
    animationDelayContact: 0.5,
    title: "Social media",
    pathId: "social-media",
    path: "/services/social-media",
    ...socialMedia,
  },
  {
    id: 5,
    animationDelay: 0.3,
    animationDelayContact: 0.6,
    title: "Brand identity",
    pathId: "brand-identity",
    path: "/services/brand-identity",
    ...brandIdentity,
  },
  {
    id: 6,
    animationDelay: 0.1,
    animationDelayContact: 0.7,
    title: "Social media automation",
    pathId: "social-media-automation",
    path: "/services/social-media-automation",
    ...socialMediaAutomation,
  },
];
