"use client";

import { useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSplashScreen } from "../../../../store/store";

import logo from "../../../../public/images/logo/catalyst-logo-two.png";

import classes from "./SplashScreen.module.scss";

const circles = [
  { id: 0, height: 55, animationDelay: 0.05 },
  { id: 1, height: 65, animationDelay: 0.15 },
  { id: 2, height: 75, animationDelay: 0.23 },
  { id: 3, height: 85, animationDelay: 0.25 },
  { id: 4, height: 95, animationDelay: 0.33 },
  { id: 5, height: 100, animationDelay: 0.35 },
];

const SplashScreen = () => {
  const { isActive, setActive } = useSplashScreen();

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 1400);
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
    animate: { scale: 1.05 },
    exit: { scale: 1.05 },
    transition: { duration: 0.5, delay: 1, ease: [0.65, 0, 0.35, 1] },
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
          {circles.map(({ id, height, animationDelay }) => (
            <m.li
              key={id}
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
