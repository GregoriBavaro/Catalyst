import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Cards from "../../components/ui/cards/Cards";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import classes from "./Services.module.scss";

import { SERVICES } from "../../db/services/services";

export const metadata: Metadata = {
  title: "Our Services - Catalyst",
  description:
    "Explore Catalyst's wide range of services including web development, design, performance optimization, SEO, marketing, social media management, brand identity creation, and more. Discover how our expert team delivers tailored solutions to help your business thrive.",
};

const Services = () => {
  return (
    <>
      <PageHeader header="What we specialize in" />
      <Cards
        subHeading="Our services"
        heading="Find out why our clients trust us to deliver outstanding results in marketing and web development."
        data={SERVICES}
        showCards
        classWrapper={classes.cardsWrapper}
      />
      <MouseAnimation />
    </>
  );
};

export default Services;
