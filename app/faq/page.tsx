import Accordion from "../../components/layout/Accordion";
import PageHeader from "../../components/layout/PageHeader";

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
    </>
  );
};

export default Faq;
