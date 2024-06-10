"use client";

import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

import ArrowButton from "../common/ArrowButton";

import classes from "./Box.module.scss";

interface BoxProps {
  heading: string;
  subHeading: string;
  data: { id: number; title: string; text: string; animationDelay: number }[];
}

const Box = ({ heading, subHeading, data }: BoxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.box}>
      <div className={classes.headingText}>
        <div className="subHeadingWrapper">
          <span className="subHeadingSquare" />
          <h6>{subHeading}</h6>
        </div>
        <h4>{heading}</h4>
        <ArrowButton label="About our company" routeTo="about" />
      </div>
      <ul>
        {data.map(({ id, title, text, animationDelay }) => (
          <li key={id}>
            <m.div
              ref={ref}
              initial={{ opacity: 0, y: "5rem" }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : "5rem",
              }}
              transition={{ duration: 0.3, delay: animationDelay, ease: "easeIn" }}
            >
              <span className="number">0{id + 1} /</span>
              <h5>{title}</h5>
              <p>{text}</p>
            </m.div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Box;
