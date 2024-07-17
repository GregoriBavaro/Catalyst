import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Accordion from "../../components/layout/accordion/Accordion";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { TERMS_DATA } from "../../db/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions - Catalyst",
  description:
    "Explore Catalyst's terms and conditions to understand rules and guidelines governing the use of our services and website. Learn about user responsibilities, usage rights, disclaimers, and more with our comprehensive information.",
};

const Terms = () => {
  return (
    <>
      <PageHeader header="Terms & conditions" />
      <Accordion heading="Website Agreement" data={TERMS_DATA} showButtonAndSubText="none" />
      <MouseAnimation />
    </>
  );
};

export default Terms;
