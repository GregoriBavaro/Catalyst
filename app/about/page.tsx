import PageHeader from "../../components/layout/PageHeader";
import GetInTouchBox from "../../components/ui/GetInTouchBox";
import PageIntro from "../../components/ui/PageIntro";
import InMotionCards from "../../components/common/animations/MotionCardsAnimation";

import { VALUES_DATA } from "../../db/values";

const About = () => {
  return (
    <>
      <PageHeader header="About us" />
      <PageIntro
        header="Your Trusted Partner in Marketing and Web Development Solutions"
        subHeader="Transforming Businesses Through 20 Years of Expertise"
        description="With over two decades of industry leadership, we are a distinguished marketing and web development agency dedicated to propelling businesses forward. Combining strategic insight, creative excellence, and technological prowess, we specialize in crafting tailored solutions that amplify your brand's presence and drive measurable results. Whether you're seeking innovative digital marketing strategies or robust web development solutions, our experienced team is committed to delivering excellence at every step. Partner with us to unleash your brand's potential and achieve lasting success in the digital landscape."
        buttonLabel="Contact"
        routeTo="/contact"
        wrapperStyle={{ alignItems: "center" }}
      >
        <InMotionCards data={VALUES_DATA} />
      </PageIntro>
      <GetInTouchBox />
    </>
  );
};

export default About;
