import Hero from "../components/layout/Hero";
import InfoBox from "../components/common/InfoBox";
import Cards from "../components/ui/Cards";

import { SERVICES } from "../db/services";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoBox />
      <Cards
        sectionName="Find out why our clients trust us to deliver outstanding results in marketing and web development."
        data={SERVICES}
      />
    </>
  );
};

export default Home;
