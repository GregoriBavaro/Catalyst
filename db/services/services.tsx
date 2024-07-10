import { webDevDesignService } from "./web-dev-design";
import { performanceOptimizationService } from "./performance-optimization";
import { seoService } from "./seo";
import { marketingService } from "./marketing";
import { socialMediaService } from "./social-media";
import { brandIdentityService } from "./brand-identity";
import { socialMediaAutomation } from "./social-media-automation";

export const SERVICES = [
  {
    id: 0,
    title: "SEO",
    path: "seo",
    ...seoService,
  },
  {
    id: 1,
    title: "Web development & design",
    path: "web-dev-design",
    ...webDevDesignService,
  },
  {
    id: 2,
    title: "Website maintenance",
    path: "website-maintenance",
    ...performanceOptimizationService,
  },
  {
    id: 3,
    title: "Marketing",
    path: "marketing",
    ...marketingService,
  },
  {
    id: 4,
    title: "Social media management",
    path: "social-media-management",
    ...socialMediaService,
  },
  {
    id: 5,
    title: "Brand identity",
    path: "brand-identity",
    ...brandIdentityService,
  },
  {
    id: 6,
    title: "Social media automation",
    path: "social-media-automation",
    ...socialMediaAutomation,
  },
];
