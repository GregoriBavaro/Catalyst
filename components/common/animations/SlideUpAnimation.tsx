"use client";

import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

const InViewAnimation = ({
  children,
  animationDelay,
}: {
  children: React.ReactNode;
  animationDelay: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <m.div
      ref={ref}
      initial={{ y: "7rem" }}
      animate={{
        y: isInView ? 0 : "7rem",
      }}
      transition={{
        duration: 0.3,
        delay: animationDelay,
        ease: "easeInOut",
      }}
    >
      {children}
    </m.div>
  );
};

export default InViewAnimation;
