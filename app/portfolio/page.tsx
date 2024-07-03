import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore Catalyst's portfolio of innovative projects and successful collaborations. From web development to digital marketing campaigns, discover how we've helped businesses achieve their goals through creative solutions and strategic execution. Browse our showcase to see the impact of our expertise and commitment to delivering excellence.",
};

const Portfolio = () => {
  return <PageHeader header="Our portfolio" />;
};

export default Portfolio;
