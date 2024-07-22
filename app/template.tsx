"use client";

import React from "react";
import { motion as m } from "framer-motion";

const templateAnimation = {
  initial: { opacity: 0, filter: "blur(12px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return <m.div {...templateAnimation}>{children}</m.div>;
};

export default Template;
