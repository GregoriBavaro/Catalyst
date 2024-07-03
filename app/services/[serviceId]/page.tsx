import { notFound } from "next/navigation";
import { StaticImageData } from "next/image";
import { SERVICES } from "../../../db/services/services";

import PageHeader from "../../../components/layout/pageHeader/PageHeader";
import PageIntro from "../../../components/ui/pageIntro/PageIntro";
import Cards from "../../../components/ui/cards/Cards";
import GetInTouch from "../../../components/ui/getInTouch/GetInTouchBox";
import StackingCardsAnimation from "../../../components/common/animations/StackingCardsAnimation";
import MotionCardsAnimation from "../../../components/common/animations/MotionCardsAnimation";

interface ServiceData {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
}

interface ServiceServices {
  id: number;
  title: string;
  animationDelay: number;
  description: string;
}

interface Service {
  id: number;
  title: string;
  pathId: string;
  path: string;
  componentHeader: string;
  componentSubHeader: string;
  componentDescription: string;
  componentCardHeader: string;
  serviceData: ServiceData[];
  services: ServiceServices[];
}

const fetchServiceData = async (serviceId: string): Promise<Service | null> => {
  const service = SERVICES.find((s) => s.pathId === serviceId);

  if (!service) {
    return null;
  }

  return service;
};

export const generateMetadata = async ({ params }: { params: { serviceId: string } }) => {
  const service = await fetchServiceData(params.serviceId);

  return {
    title: service?.title,
    description: service?.componentDescription,
  };
};

const ServicesDetails = async ({ params }: { params: { serviceId: string } }) => {
  const service = await fetchServiceData(params.serviceId);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader header={service.title} />
      <PageIntro
        header={service.componentHeader}
        subHeader={service.componentSubHeader}
        description={service.componentDescription}
        buttonLabel="Contact"
        routeTo="/contact"
      >
        <StackingCardsAnimation data={service.serviceData} />
        <span className="serviceMotionCard">
          <MotionCardsAnimation data={service.serviceData} />
        </span>
      </PageIntro>
      <Cards heading={service.componentCardHeader} data={service.services} />
      <GetInTouch />
    </>
  );
};

export default ServicesDetails;
