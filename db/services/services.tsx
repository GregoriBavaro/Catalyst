import { webDevDesignService } from "./web-dev-design";
import { performanceOptimizationService } from "./performance-optimization";
import { seoService } from "./seo";
import { marketingStrategyAndPlanningService } from "./marketing-strategy";
import { promotionalActivitiesService } from "./promotional-activities";
import { socialMediaManagementService } from "./social-media-management";
import { eventsAndPromotionsService } from "./organizing-events-and-promotions";
import { salesPlanAndToolsService } from "./sales-plan-and-tools";
import { productPlacementService } from "./product-placement";

export const SERVICES = [{
    id: 0,
    title: "Comprehensive social media strategy and management",
    path: "social-media-management",
    ...socialMediaManagementService,
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
    title: "Marketing strategy for advertising & promotions",
    path: "marketing-strategy-and-planning",
    ...marketingStrategyAndPlanningService,
  },
  {
    id: 4,
    title: "Promotional activities",
    path: "promotional-activities",
    ...promotionalActivitiesService,
  },
  {
    id: 5,
    title: "SEO",
    path: "seo",
    ...seoService,
  },
  {
    id: 6,
    title: "Organizing events and promotions",
    path: "events-and-promotions",
    ...eventsAndPromotionsService,
  },
  {
    id: 7,
    title: "Developing sales plans & implementing sales tools",
    path: "sales-planning-tools",
    ...salesPlanAndToolsService,
  },
  {
    id: 8,
    title: "Product placement",
    path: "product-placement",
    ...productPlacementService,
  },
];
