import type { Metadata } from "next";

import Accordion from "../../components/layout/accordion/Accordion";
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { FAQ_DATA } from "../../db/faq";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Explore answers to common questions about our services, policies, and more. Find detailed explanations to help you navigate through frequently asked questions and make informed decisions.",
};

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
