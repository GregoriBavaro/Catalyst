import { StaticImageData } from "next/image";

interface Project {
  id: number;
  path: string;
  client: string;
  clientIndustry: string;
  clientDescription: string;
  projectDescription: string;
  projectShortDescription: string;
  challenges: string;
  solutions: string;
  results: string;
  duration: string;
  projectLink: string;
  service: string[];
}

interface ServiceData {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
}

interface ServiceServices {
  id: number;
  title: string;
  description: string;
}

interface ServicePhases {
  id: number;
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  path: string;
  componentHeader: string;
  componentSubHeader: string;
  componentDescription: string;
  componentCardHeader: string;
  serviceData: ServiceData[];
  services: ServiceServices[];
  servicePhases: ServicePhases[];
}

export const fetchData = <T extends Project | Service>(paramsId: string, data: T[]): T | null => {
  const item = data.find((s) => s.path === paramsId);
  return item || null;
};
