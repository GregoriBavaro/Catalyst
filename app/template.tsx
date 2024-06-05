"use client";

import React from "react";
import { motion as m } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 50,
  },
  transition: { duration: 0.7, delay: 0.4 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return <m.div {...pageVariants}>{children}</m.div>;
};

export default Template;
