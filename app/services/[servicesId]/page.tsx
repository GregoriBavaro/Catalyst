import { notFound } from "next/navigation";
import { SERVICES } from "../../../db/services";

const ServicesDetails = ({ params }: { params: { servicesId: string } }) => {
  const service = SERVICES.find((s) => s.serviceId === params.servicesId);

  if (!service) {
    notFound();
  }

  return <div>{service.title}</div>;
};

export default ServicesDetails;
