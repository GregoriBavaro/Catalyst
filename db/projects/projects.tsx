import { siennaPastryBoutique } from "./sienna";
import { ecoTravelAdventures } from "./ecoTravel";
import { greenLeafOrganicFarm } from "./greenLeaf";
import { modernTechSolutions } from "./techSolutions";
import { urbanFitGym } from "./urbanFit";

export const PROJECTS = [
  {
    id: 0,
    path: "sienna-pastry-boutique",
    ...siennaPastryBoutique,
  },
  {
    id: 1,
    path: "eco-travel-adventure",
    ...ecoTravelAdventures,
  },
  {
    id: 2,
    path: "green-leaf-organic-farm",
    ...greenLeafOrganicFarm,
  },
  {
    id: 3,
    path: "modern-tech-solutions",
    ...modernTechSolutions,
  },
  {
    id: 4,
    path: "urban-fit-gym",
    ...urbanFitGym,
  },
];
