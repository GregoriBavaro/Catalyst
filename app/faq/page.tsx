import type { Metadata } from "next";

import Accordion from "../../components/layout/accordion/Accordion";
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { FAQ_DATA } from "../../db/faq";

export const metadata: Metadata = {
  title: "Frequently asked questions - Catalyst",
  description:
    "Find answers to common questions about our services and policies. Get detailed explanations to help you make informed decisions.",
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
