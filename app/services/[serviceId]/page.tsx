import { Metadata } from "next";
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

const fetchServiceData = (serviceId: string): Service | null => {
  const service = SERVICES.find((s) => s.path === serviceId);
  return service || null;
};

export async function generateMetadata({
  params,
}: {
  params: { serviceId: string };
}): Promise<Metadata> {
  const service = fetchServiceData(params.serviceId);
  return {
    title: service?.title || "Service",
    description: service?.componentDescription || "",
  };
}

const ServicesDetails = ({ params }: { params: { serviceId: string } }) => {
  const service = fetchServiceData(params.serviceId);

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
      />
      <ParallaxScrollAnimation data={service.servicePhases} />
      <GetInTouch />
    </>
  );
};

export default ServicesDetails;
