import PageHeader from "../../components/layout/PageHeader";
import Accordion from "../../components/layout/Accordion";

import { LEGAL_DATA } from "../../db/legal";

const Legal = () => {
  return (
    <>
      <PageHeader header="Legal notice" />
      <Accordion heading="Disclaimer" data={LEGAL_DATA} showButtonAndSubText="none" />
    </>
  );
};

export default Legal;
