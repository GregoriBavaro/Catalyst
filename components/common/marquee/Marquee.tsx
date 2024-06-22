"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";
import { useHamburgerMenu } from "../../../store/store";

import classes from "./Marquee.module.scss";

interface MarqueeInterface {
  text: string;
  className?: string;
  repeatTimes: number;
  marqueeAnimation?: {};
}

const Slider = ({ text, repeatTimes, className, marqueeAnimation }: MarqueeInterface) => {
  const route = useRouter();
  const { isOpen, setOpen } = useHamburgerMenu();

  const handleRoute = () => {
    if (isOpen) {
      setOpen(false);
    }
    route.push("contact");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRoute();
    }
  };

  return (
    <m.div
      {...marqueeAnimation}
      className={`${classes.marquee} ${className}`}
      onClick={handleRoute}
      onKeyDown={(e) => handleKeyDown(e)}
      role="button"
      tabIndex={0}
    >
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
