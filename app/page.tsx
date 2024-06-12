import Hero from "../components/layout/Hero";
import InfoBox from "../components/common/InfoBox";
import Cards from "../components/ui/Cards";
import Box from "../components/ui/Box";
import MouseAnimation from "../components/ui/MouseAnimation";

import { SERVICES } from "../db/services";
import { WHY_US } from "../db/promos";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards
        subHeading="What we specialize in"
        heading="Find out why our clients trust us to deliver outstanding results in marketing and web development."
        data={SERVICES}
      />
      <Box
        subHeading="Why Catalyst"
        heading="Built by Marketers and Developers, We created Catalyst to elevate your brand to new heights"
        data={WHY_US}
      />
      <MouseAnimation />
    </>
  );
};

export default Home;
