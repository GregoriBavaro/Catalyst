import { notFound } from "next/navigation";
import { SERVICES } from "../../../db/services";

import PageHeader from "../../../components/layout/PageHeader";
import PhotoPresentation from "../../../components/ui/PhotoPresentation";

const ServicesDetails = ({ params }: { params: { servicesId: string } }) => {
  const service = SERVICES.find((s) => s.serviceId === params.servicesId);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader header={service.title} />
      <PhotoPresentation
        image={service.img}
        header={service.componentHeader}
        subHeader={service.componentSubHeader}
        description={service.componentDescription}
        buttonLabel="Contact"
        routeTo="/contact"
      />
    </>
  );
};

export default ServicesDetails;
