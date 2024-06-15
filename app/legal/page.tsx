import PageHeader from "../../components/layout/PageHeader";
import Accordion from "../../components/layout/Accordion";
import MouseAnimation from "../../components/ui/GetInTouchBox";

import { LEGAL_DATA } from "../../db/legal";

const Legal = () => {
  return (
    <>
      <PageHeader header="Legal notice" />
      <Accordion heading="Disclaimer" data={LEGAL_DATA} showButtonAndSubText="none" />
      <MouseAnimation />
    </>
  );
};

export default Legal;
