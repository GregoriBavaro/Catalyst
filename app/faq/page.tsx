import Accordion from "../../components/layout/accordion/Accordion";
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

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
