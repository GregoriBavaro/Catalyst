import PageHeader from "../../components/layout/PageHeader";
import Accordion from "../../components/layout/Accordion";

import { TERMS_DATA } from "../../db/terms";

const Terms = () => {
  return (
    <>
      <PageHeader header="Terms & conditions" />
      <Accordion heading="Website Agreement" data={TERMS_DATA} showButtonAndSubText="none" />
    </>
  );
};

export default Terms;
