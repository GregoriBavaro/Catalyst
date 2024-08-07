"use client";

import { useRef, useEffect } from "react";
import { motion as m, useScroll, useTransform, useInView } from "framer-motion";
import { useParallaxScroll } from "../../../../store/store";

import useWindowSize from "../../../../hooks/use-WindowSize";

import Button from "../../buttons/Button";
import PageTransition from "../pageTransitionAnimation/pageTransitionAnimation";

import classes from "./ParallaxScrollAnimation.module.scss";

interface ServicePhases {
  data: { id: number; title: string; description: string }[];
}

const ParallaxScrollAnimation = ({ data }: ServicePhases) => {
  const size = useWindowSize();
  const { scrollY } = useScroll();
  const leftRef = useRef<HTMLDivElement>(null);
  const { setParallaxScroll } = useParallaxScroll();

  const marginTop = (size.width ?? 950) < 950 ? 0 : 48;
  const y = useTransform(scrollY, [0, 500], [0, marginTop]);

  const isInView = useInView(leftRef, { amount: "all", margin: "0px 0px -40px 0px" });

  useEffect(() => {
    setParallaxScroll(isInView);
  }, [isInView, setParallaxScroll]);

  return (
    <section className={classes.parallaxScrollAnimation}>
      <m.div className={classes.parallaxScrollAnimation__left} ref={leftRef} style={{ y }}>
        <div className="subHeadingWrapper">
          <span className="subHeadingSquare" />
          <h2>Project Phases Overview</h2>
        </div>
        <h1>Exploring Our Expertise in Managing Diverse Project Scopes</h1>
        <p>
          Delve into the comprehensive project phases highlighted alongside, demonstrating our
          proficiency in navigating projects of varying scopes and complexities with meticulous
          attention and unwavering commitment.
        </p>
        <PageTransition href="/contact">
          <Button label="Book a project" buttonWidth="15rem" />
        </PageTransition>
      </m.div>
      <div className={classes.parallaxScrollAnimation__right}>
        <ul>
          {data.map(({ id, title, description }) => (
            <li key={id}>
              <span className="number">0{id + 1} /</span>
              <h1>{title}</h1>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ParallaxScrollAnimation;
