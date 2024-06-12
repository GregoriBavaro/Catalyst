import Accordion from "../../components/layout/Accordion";
import PageHeader from "../../components/layout/PageHeader";
import MouseAnimation from "../../components/ui/MouseAnimation";

import { FAQ_DATA } from "../../db/faq";

const Faq = () => {
  return (
    <>
      <PageHeader header="Frequently asked questions" />
      <Accordion
        heading="Have questions?"
        subHeading="Have more questions? Contact us."
        buttonLabel="Contact"
        data={FAQ_DATA}
      />
      <MouseAnimation />
    </>
  );
};

export default Faq;
