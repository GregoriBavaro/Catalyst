"use client";

import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";

import classes from "./Marquee.module.scss";

interface MarqueeInterface {
  text: string;
  className?: string;
  repeatTimes: number;
  marqueeAnimation?: {};
}

const Slider = ({ text, repeatTimes, className, marqueeAnimation }: MarqueeInterface) => {
  return (
    <m.div {...marqueeAnimation} className={`${classes.marquee} ${className}`}>
      <Marquee>
        {Array.from({ length: repeatTimes }, (_, index) => (
          <span className="gradientText" key={`${text}-${index}`}>
            {text}
          </span>
        ))}
      </Marquee>
    </m.div>
  );
};

export default Slider;
