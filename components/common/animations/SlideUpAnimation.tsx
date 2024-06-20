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
  const isInView = useInView(ref, { once: true, margin: "200px 0px" });

  return (
    <m.div
      ref={ref}
      initial={{ y: "100%" }}
      animate={{
        y: isInView ? 0 : "100%",
      }}
      transition={{
        duration: 0.3,
        delay: animationDelay,
        ease: "easeOut",
      }}
    >
      {children}
    </m.div>
  );
};

export default InViewAnimation;
