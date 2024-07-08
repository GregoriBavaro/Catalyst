"use client";

import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

const SlideUpAnimation = ({
  children,
  animationDelay,
}: {
  children: React.ReactNode;
  animationDelay: number | undefined;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "200px 0px" });

  return (
    <m.div
      ref={ref}
      initial={{ y: "70%" }}
      animate={{
        y: isInView ? 0 : "70%",
      }}
      transition={{
        duration: 0.3,
        delay: animationDelay,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      {children}
    </m.div>
  );
};

export default SlideUpAnimation;
