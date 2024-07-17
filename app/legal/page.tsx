import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Accordion from "../../components/layout/accordion/Accordion";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { LEGAL_DATA } from "../../db/legal";

export const metadata: Metadata = {
  title: "Legal Notice - Catalyst",
  description:
    "Find important information on terms of service, privacy policy, and other legal aspects. Navigate through detailed sections with our clear and transparent accordion-style layout.",
};

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
