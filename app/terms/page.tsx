import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Accordion from "../../components/layout/accordion/Accordion";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { TERMS_DATA } from "../../db/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read our terms and conditions to understand the rules and guidelines governing the use of Catalyst's services and website. Our detailed terms cover aspects such as user responsibilities, usage rights, disclaimers, and more. Explore our comprehensive information to ensure you understand how we operate and what to expect when engaging with us.",
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
