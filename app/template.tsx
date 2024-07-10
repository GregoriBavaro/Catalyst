"use client";

import React from "react";
import { motion as m } from "framer-motion";
import { useHamburgerMenu } from "../store/store";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useHamburgerMenu();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-5vh",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: isOpen ? 0 : 0.5, ease: [0.65, 0, 0.35, 1] },
  };
  return <m.div {...pageVariants}>{children}</m.div>;
};

export default Template;
