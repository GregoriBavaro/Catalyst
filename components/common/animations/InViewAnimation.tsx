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
      initial={{ opacity: 0, y: "5rem" }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : "5rem",
      }}
      transition={{
        duration: 0.2,
        delay: animationDelay,
        ease: "easeIn",
        opacity: { duration: 0.3, delay: animationDelay + 0.2 },
      }}
    >
      {children}
    </m.div>
  );
};

export default InViewAnimation;
