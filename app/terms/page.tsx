import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Accordion from "../../components/layout/accordion/Accordion";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

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
