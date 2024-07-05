"use client";

import Link from "next/link";
import { motion as m, useScroll, useTransform } from "framer-motion";
import useWindowSize from "../../../hooks/use-WindowSize";

import Button from "../buttons/Button";

import classes from "./ParallaxScrollAnimation.module.scss";

interface ServicePhases {
  data: { id: number; title: string; description: string }[];
}

const ParallaxScrollAnimation = ({ data }: ServicePhases) => {
  const size = useWindowSize();
  const { scrollY } = useScroll();

  const marginTop = (size.width ?? 950) < 950 ? 0 : 48;
  const y = useTransform(scrollY, [0, 500], [0, marginTop]);

  return (
    <section className={classes.parallaxScrollAnimation}>
      <m.div className={classes.parallaxScrollAnimation__left} style={{ y }}>
        <div className="subHeadingWrapper">
          <span className="subHeadingSquare" />
          <h6>Project Phases Overview</h6>
        </div>
        <h4>Exploring Our Expertise in Managing Diverse Project Scopes</h4>
        <p>
          Delve into the comprehensive project phases highlighted alongside, demonstrating our
          proficiency in navigating projects of varying scopes and complexities with meticulous
          attention and unwavering commitment.
        </p>
        <Link href="/contact">
          <Button label="Book a project" buttonWidth="15rem" />
        </Link>
      </m.div>
      <div className={classes.parallaxScrollAnimation__right}>
        <ul>
          {data.map(({ id, title, description }) => (
            <li key={id}>
              <span className="number">0{id + 1} /</span>
              <h5>{title}</h5>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ParallaxScrollAnimation;
