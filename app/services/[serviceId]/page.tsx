import { notFound } from "next/navigation";
import { StaticImageData } from "next/image";
import { SERVICES } from "../../../db/services/services";

import PageHeader from "../../../components/layout/pageHeader/PageHeader";
import PageIntro from "../../../components/ui/pageIntro/PageIntro";
import Cards from "../../../components/ui/cards/Cards";
import GetInTouch from "../../../components/ui/getInTouch/GetInTouchBox";
import StackingCardsAnimation from "../../../components/common/animations/stackingCardsAnimation/StackingCardsAnimation";
import MotionCardsAnimation from "../../../components/common/animations/motionCardsAnimation/MotionCardsAnimation";
import ParallaxScrollAnimation from "../../../components/common/animations/parallaxScrollAnimation/ParallaxScrollAnimation";

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

const fetchServiceData = async (serviceId: string): Promise<Service | null> => {
  const service = SERVICES.find((s) => s.path === serviceId);

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
      <Cards
        heading="We provide a wide range of tailored solutions to meet your business needs."
        data={service.services}
        showCards
        animationType="animationDelayHome"
      />
      <ParallaxScrollAnimation data={service.servicePhases} />
      <GetInTouch />
    </>
  );
};

export default ServicesDetails;
