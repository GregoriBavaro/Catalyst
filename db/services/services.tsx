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
    title: "Web development & design",
    pathId: "web-dev-design",
    path: "services/web-dev-design",
    ...webDevDesign,
  },
  {
    id: 1,
    title: "Website maintenance",
    pathId: "website-maintenance",
    path: "services/website-maintenance",
    ...performanceOptimization,
  },
  {
    id: 2,
    title: "SEO",
    pathId: "seo",
    path: "services/seo",
    ...seo,
  },
  {
    id: 3,
    title: "Marketing",
    pathId: "marketing",
    path: "services/marketing",
    ...marketing,
  },
  {
    id: 4,
    title: "Social media",
    pathId: "social-media",
    path: "services/social-media",
    ...socialMedia,
  },
  {
    id: 5,
    title: "Brand identity",
    pathId: "brand-identity",
    path: "services/brand-identity",
    ...brandIdentity,
  },
  {
    id: 6,
    title: "Social media automation",
    pathId: "social-media-automation",
    path: "services/social-media-automation",
    ...socialMediaAutomation,
  },
];
