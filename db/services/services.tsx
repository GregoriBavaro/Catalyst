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
    path: "web-dev-design",
    ...webDevDesign,
  },
  {
    id: 1,
    title: "Website maintenance",
    path: "website-maintenance",
    ...performanceOptimization,
  },
  {
    id: 2,
    title: "SEO",
    pathId: "seo",
    path: "seo",
    ...seo,
  },
  {
    id: 3,
    title: "Marketing",
    path: "marketing",
    ...marketing,
  },
  {
    id: 4,
    title: "Social media",
    path: "social-media",
    ...socialMedia,
  },
  {
    id: 5,
    title: "Brand identity",
    path: "brand-identity",
    ...brandIdentity,
  },
  {
    id: 6,
    title: "Social media automation",
    path: "social-media-automation",
    ...socialMediaAutomation,
  },
];
