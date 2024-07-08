"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useHamburgerMenu } from "../store/store";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
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
    exit: {
      opacity: 0,
      y: "-5vh",
    },
    transition: { duration: isOpen ? 0 : 0.5, ease: [0.65, 0, 0.35, 1] },
  };
  return (
    <AnimatePresence mode="wait">
      <m.div key={pathname} {...pageVariants}>
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default Template;
