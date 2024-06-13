"use client";

import React, { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const ScrollInViewAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <m.section
      style={{ position: "relative", scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
    >
      {children}
    </m.section>
  );
};

export default ScrollInViewAnimation;
