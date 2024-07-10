"use client";

import React from "react";
import { motion as m } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  forwardRef?: any;
  itemClass: string;
}

const SlideUpItems = ({ children, itemClass, forwardRef }: SlideUpProps) => {
  const itemVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: { y: 200 },
  };

  return (
    <m.li ref={forwardRef} className={itemClass} variants={itemVariants}>
      {children}
    </m.li>
  );
};

export default SlideUpItems;
