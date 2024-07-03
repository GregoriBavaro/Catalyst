import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Accordion from "../../components/layout/accordion/Accordion";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { LEGAL_DATA } from "../../db/legal";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Explore our legal notice for important information regarding terms of service, privacy policy, and other legal aspects. Our accordion-style layout makes it easy to navigate through detailed sections, ensuring transparency and clarity on how we handle your data and our terms of use.",
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
