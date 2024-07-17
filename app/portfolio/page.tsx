import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Grid from "../../components/ui/grid/Grid";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import { PROJECTS } from "../../db/projects/projects";

export const metadata: Metadata = {
  title: "Our Portfolio - Catalyst",
  description:
    "Explore Catalyst's portfolio of innovative projects and successful collaborations. Discover how we've helped businesses achieve their goals through web development, digital marketing campaigns, and creative solutions. Browse our showcase to see the impact of our expertise and commitment to excellence.",
};

const Portfolio = () => {
  return (
    <>
      <PageHeader header="Our portfolio" />
      <Grid data={PROJECTS} />
      <MouseAnimation />
    </>
  );
};

export default Portfolio;
