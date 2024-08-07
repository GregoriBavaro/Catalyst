"use client";

import React from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useHamburgerMenu } from "../../../store/store";
import useWindowSize from "../../../hooks/use-WindowSize";

import HamburgerItems from "./HamburgerItems";

import classes from "./HamburgerMenu.module.scss";

const HamburgerMenu = () => {
  const { isOpen, setOpen } = useHamburgerMenu();
  const size = useWindowSize();

  const circlePosition = (size.width ?? 1280) > 640 ? "55px" : "42px";
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
        delay: 0.6,
        type: "spring",
        stiffness: 400,
        damping: 40,
        opacity: { delay: 0.79 },
      },
    },
    transition: { duration: 4, ease: [0.65, 0, 0.35, 1] },
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <>
      <div
        className={classes.hamburgerButton}
        onClick={() => setOpen(!isOpen)}
        onKeyDown={(e) => handleKeyDown(e)}
        role="button"
        aria-label="Toggle menu"
        tabIndex={0}
      >
        <Hamburger toggled={isOpen} size={26} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <m.div {...menuAnimation} className={classes.menu}>
            <HamburgerItems setOpen={setOpen} />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
