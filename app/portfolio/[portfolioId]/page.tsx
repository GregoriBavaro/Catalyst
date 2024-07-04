import PageHeader from "../../../components/layout/pageHeader/PageHeader";

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  return (
    <>
      <PageHeader header={params.projectId} />
      <h1>{params.projectId}</h1>
    </>
  );
};

export default ProjectDetail;
