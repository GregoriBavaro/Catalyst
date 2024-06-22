import { notFound } from "next/navigation";
import { SERVICES } from "../../../db/services/services";

import PageHeader from "../../../components/layout/pageHeader/PageHeader";
import PageIntro from "../../../components/ui/pageIntro/PageIntro";
import Cards from "../../../components/ui/cards/Cards";
import GetInTouch from "../../../components/ui/getInTouch/GetInTouchBox";
import StackingCardsAnimation from "../../../components/common/animations/StackingCardsAnimation";

const ServicesDetails = ({ params }: { params: { servicesId: string } }) => {
  const service = SERVICES.find((s) => s.pathId === params.servicesId);

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
      </PageIntro>
      <Cards heading={service.componentCardHeader} data={service.services} />
      <GetInTouch />
    </>
  );
};

export default ServicesDetails;
