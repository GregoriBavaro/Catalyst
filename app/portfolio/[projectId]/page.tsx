import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "../../../components/layout/pageHeader/PageHeader";

import { PROJECTS } from "../../../db/projects/projects";

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

const fetchProjectData = (projectId: string): Project | null => {
  const service = PROJECTS.find((s) => s.path === projectId);
  return service || null;
};

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const service = fetchProjectData(params.projectId);
  return {
    title: service?.client || "Project",
    description: service?.clientDescription || "",
  };
}

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  const project = fetchProjectData(params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHeader header={params.projectId} />
      <h1>{project.clientDescription}</h1>
    </>
  );
};

export default ProjectDetail;
