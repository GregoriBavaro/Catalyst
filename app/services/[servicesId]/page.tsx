import { notFound } from "next/navigation";
import { SERVICES } from "../../../db/services";

import PageHeader from "../../../components/layout/PageHeader";

const ServicesDetails = ({ params }: { params: { servicesId: string } }) => {
  const service = SERVICES.find((s) => s.serviceId === params.servicesId);

  if (!service) {
    notFound();
  }

  return <PageHeader header={service.title} />;
};

export default ServicesDetails;
