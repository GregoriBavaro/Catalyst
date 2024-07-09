"use client";

import { useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSplashScreen } from "../../../../store/store";

import logo from "../../../../public/images/logo/catalyst-logo-two.png";

import classes from "./SplashScreen.module.scss";

const circles = [
  {
    id: 0,
    height: 25,
    animationDelay: 0.02,
    overlapOrder: 8,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 1,
    height: 35,
    animationDelay: 0.07,
    overlapOrder: 7,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 2,
    height: 45,
    animationDelay: 0.13,
    overlapOrder: 6,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 3,
    height: 55,
    animationDelay: 0.17,
    overlapOrder: 5,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 4,
    height: 63,
    animationDelay: 0.23,
    overlapOrder: 4,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 5,
    height: 73,
    animationDelay: 0.35,
    overlapOrder: 3,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 6,
    height: 85,
    animationDelay: 0.55,
    overlapOrder: 2,
    backgroundColor: "--dark-transparent-blue",
  },
  {
    id: 7,
    height: 100,
    animationDelay: 2.3,
    overlapOrder: 1,
    backgroundColor: "rgb(1, 19, 31)",
  },
];

const SplashScreen = () => {
  const { isActive, setActive } = useSplashScreen();

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [setActive]);

  const opacityAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: [0.65, 0, 0.35, 1] },
  };

  const logoAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 1 },
    transition: { duration: 0.5, delay: 0.6, ease: [0.65, 0, 0.35, 1] },
  };

  const circlesAnimation = (delay: number, height: number) => {
    return {
      initial: { height: `${height}%` },
      animate: { height: 0 },
      exit: { height: 0 },
      transition: { duration: 0.5, delay, ease: [0.65, 0, 0.35, 1] },
    };
  };

  return (
    <AnimatePresence>
      {isActive && (
        <m.ul {...opacityAnimation} className={classes.splashAnimation}>
          {circles.map(({ id, height, animationDelay, backgroundColor, overlapOrder }) => (
            <m.li
              key={id}
              style={{ backgroundColor, zIndex: overlapOrder }}
              {...circlesAnimation(animationDelay, height)}
              className={classes.splashAnimation__li}
            />
          ))}
          <m.li {...logoAnimation} className={classes.splashAnimation__logo}>
            <Image src={logo} alt="catalyst logo" priority />
          </m.li>
        </m.ul>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
