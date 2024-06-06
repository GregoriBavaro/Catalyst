"use client";

import React from "react";
import { motion as m } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { duration: 0.5 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return <m.div {...pageVariants}>{children}</m.div>;
};

export default Template;
