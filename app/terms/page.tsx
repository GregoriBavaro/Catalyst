import PageHeader from "../../components/layout/PageHeader";
import Accordion from "../../components/layout/Accordion";
import MouseAnimation from "../../components/ui/MouseAnimation";

import { TERMS_DATA } from "../../db/terms";

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
