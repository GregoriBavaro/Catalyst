"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSplashScreen } from "../../../../store/store";
import { sleep } from "../../../../utils/sleep";

import logo from "../../../../public/images/logo/catalyst-logo-two.png";

import OBJECTS from "./SplashObjects";

import classes from "./SplashScreen.module.scss";

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

const SplashScreen = () => {
  const { isActive, setActive } = useSplashScreen();
  const pathname = usePathname();

  const handleActive = async (ms: number) => {
    await sleep(ms);
    setActive(false);
  };

  useEffect(() => {
    handleActive(1200);
  });

  const objectsAnimation = (delay: number, height: number) => {
    return {
      initial: { height: `${height}%` },
      animate: { height: 0 },
      exit: { height: 0 },
      transition: { duration: 0.5, delay, ease: [0.65, 0, 0.35, 1] },
    };
  };

  return (
    <AnimatePresence>
      {isActive && pathname === "/" && (
        <m.ul {...opacityAnimation} className={classes.splashAnimation}>
          {OBJECTS.map(({ id, height, animationDelay, backgroundColor, overlapOrder }) => (
            <m.li
              key={id}
              style={{ backgroundColor, zIndex: overlapOrder }}
              {...objectsAnimation(animationDelay, height)}
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
