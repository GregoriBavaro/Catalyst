import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SERVICES } from "../../../db/services/services";

import PageHeader from "../../../components/layout/pageHeader/PageHeader";
import PageIntro from "../../../components/ui/pageIntro/PageIntro";
import Cards from "../../../components/ui/cards/Cards";
import GetInTouch from "../../../components/ui/getInTouch/GetInTouchBox";
import StackingCardsAnimation from "../../../components/common/animations/stackingCardsAnimation/StackingCardsAnimation";
import MotionCardsAnimation from "../../../components/common/animations/motionCardsAnimation/MotionCardsAnimation";
import ParallaxScrollAnimation from "../../../components/common/animations/parallaxScrollAnimation/ParallaxScrollAnimation";

import { fetchData } from "../../../utils/fetchData";

export async function generateMetadata({
  params,
}: {
  params: { serviceId: string };
}): Promise<Metadata> {
  const service = fetchData(params.serviceId, SERVICES);
  return {
    title: service?.title || "Service",
    description: service?.componentDescription || "",
  };
}

const ServicesDetails = ({ params }: { params: { serviceId: string } }) => {
  const service = fetchData(params.serviceId, SERVICES);

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
