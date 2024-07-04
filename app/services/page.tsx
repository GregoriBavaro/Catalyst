import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Cards from "../../components/ui/cards/Cards";
import MouseAnimation from "../../components/ui/getInTouch/GetInTouchBox";

import classes from "./Services.module.scss";

import { SERVICES } from "../../db/services/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover the wide range of services offered by Catalyst. From web development and design to performance optimization, SEO, marketing, social media management, brand identity creation, and social media automation, our expert team delivers top-notch solutions tailored to your needs. Explore each service in detail to see how we can help your business thrive.",
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
        animationType="animationDelayContact"
        classWrapper={classes.cardsWrapper}
      />
      <MouseAnimation />
    </>
  );
};

export default Services;
