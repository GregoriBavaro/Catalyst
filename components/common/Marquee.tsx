import React from "react";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";

import classes from "./Marquee.module.scss";

interface MarqueeInterface {
  text: string;
  className?: string;
  repeatTimes: number;
}

const MarqueeAnimation = {
  initial: { transform: "translateY(120%)" },
  animate: { transform: "translateY(0%)", transition: { duration: 0.3, delay: 0.6 } },
  exit: { transform: "translateY(120%)" },
  transition: { duration: 0.3, delay: 0 },
};

const Slider: React.FC<MarqueeInterface> = ({ text, repeatTimes, className }) => {
  return (
    <m.div {...MarqueeAnimation} className={`${classes.marquee} ${className}`}>
      <Marquee>
        {Array.from({ length: repeatTimes }, (_, index) => (
          <span key={`${text}-${index}`}>{text}</span>
        ))}
      </Marquee>
    </m.div>
  );
};

export default Slider;
