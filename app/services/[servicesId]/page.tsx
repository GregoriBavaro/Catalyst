"use client";

import { notFound } from "next/navigation";
import { SERVICES } from "../../../db/services/services";

import PageHeader from "../../../components/layout/PageHeader";
import PhotoPresentation from "../../../components/ui/ServiceIntroSection";
import Cards from "../../../components/ui/cards/Cards";
import MouseAnimation from "../../../components/ui/GetInTouchBox";

const ServicesDetails = ({ params }: { params: { servicesId: string } }) => {
  const service = SERVICES.find((s) => s.pathId === params.servicesId);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader header={service.title} />
      <PhotoPresentation
        header={service.componentHeader}
        subHeader={service.componentSubHeader}
        description={service.componentDescription}
        buttonLabel="Contact"
        routeTo="/contact"
        serviceData={service.serviceData}
      />
      <Cards heading={service.componentCardHeader} data={service.services} />
      <MouseAnimation />
    </>
  );
};

export default ServicesDetails;
