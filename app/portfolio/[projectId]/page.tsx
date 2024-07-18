import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "../../../components/layout/pageHeader/PageHeader";

import { fetchData } from "../../../utils/fetchData";

import { PROJECTS } from "../../../db/projects/projects";

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const service = fetchData(params.projectId, PROJECTS);
  return {
    title: service?.client || "Project",
    description: service?.clientDescription || "",
  };
}

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  const project = fetchData(params.projectId, PROJECTS);

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
