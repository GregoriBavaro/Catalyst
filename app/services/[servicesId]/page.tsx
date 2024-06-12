"use client";

import { notFound } from "next/navigation";
import { SERVICES } from "../../../db/services";

import PageHeader from "../../../components/layout/PageHeader";
import PhotoPresentation from "../../../components/ui/PhotoPresentation";
import Cards from "../../../components/ui/Cards";
import MouseAnimation from "../../../components/ui/MouseAnimation";

const ServicesDetails = ({ params }: { params: { servicesId: string } }) => {
  const service = SERVICES.find((s) => s.pathId === params.servicesId);

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
      <Cards heading={service.componentCardHeader} data={service.services} />
      <MouseAnimation />
    </>
  );
};

export default ServicesDetails;
