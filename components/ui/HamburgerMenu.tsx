"use client";

import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";
import useWindowSize from "../../hooks/use-WindowSize";

import HamburgerItems from "./HamburgerItems";

import classes from "./HamburgerMenu.module.scss";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const size = useWindowSize();

  const handleClick = (toggled: boolean) => {
    setOpen(toggled);
  };

  const circlePosition = (size.width ?? 1280) > 640 ? "64px" : "42px";
  const circleSize = (size.width ?? 1280) > 640 ? "32px" : "25px";

  const menuAnimation = {
    initial: {
      clipPath: `circle(${circleSize} at calc(100% - ${circlePosition}) ${circlePosition})`,
      opacity: 0,
    },
    animate: {
      clipPath: `circle(${
        (size.width ?? 1000) * 2 + 200
      }px at calc(100% - ${circlePosition}) ${circlePosition})`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    exit: {
      clipPath: `circle(${circleSize} at calc(100% - ${circlePosition}) ${circlePosition})`,
      opacity: 0,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 40,
        opacity: { delay: 0.58 },
      },
    },
    transition: { duration: 4 },
  };

  return (
    <>
      <div className={classes.hamburgerButton}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={(toggled) => handleClick(toggled)}
          size={26}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <m.div {...menuAnimation} className={classes.menu}>
            <HamburgerItems isOpen={isOpen} />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
