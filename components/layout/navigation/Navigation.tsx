"use client";

import { motion as m } from "framer-motion";
import useScrollPosition from "../../../hooks/use-ScrollPosition";
import useScrollDirection from "../../../hooks/use-ScrollDirection";

import HamburgerMenu from "../../ui/hamburger/HamburgerMenu";
import Logo from "../logo/Logo";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  const scrollPosition = useScrollPosition();
  const scrollDirection = useScrollDirection();

  const navigationStyles = {
    animate: {
      top: scrollPosition > 50 && scrollDirection === "down" ? "-8.3rem" : "0",
      background:
        scrollPosition > 0
          ? "linear-gradient(0deg, rgba(1,19,31,0) 0%, rgba(1,19,31,0.9156454818255427) 47%, rgba(1,19,31,1) 70%)"
          : "linear-gradient(0deg, rgba(1,19,31,0) 0%, rgba(1,19,31,0) 47%, rgba(1,19,31,0) 70%)",
    },
    transition: { duration: 0.5 },
  };

  return (
    <m.header {...navigationStyles} className={classes.header}>
      <nav>
        <Logo />
        <HamburgerMenu />
      </nav>
    </m.header>
  );
};

export default Navigation;
