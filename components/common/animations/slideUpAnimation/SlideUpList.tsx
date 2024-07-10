"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion as m, useInView } from "framer-motion";
import useWindowSize from "../../../../hooks/use-WindowSize";

interface SlideUpProps {
  children: React.ReactNode;
  listClass: string;
  showAllCards?: boolean;
  firstCardHeight?: number | null;
}

const StaggerChildrenAnimation = ({
  children,
  listClass,
  firstCardHeight,
  showAllCards,
}: SlideUpProps) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "50px 0px" });

  const [adjustHeight, setAdjustHeight] = useState<number>(40);
  const size = useWindowSize();

  const effectiveHeight = firstCardHeight ?? 0;
  const calculateHeight = effectiveHeight * 2 + adjustHeight;

  useEffect(() => {
    if ((size.width ?? 768) < 768) {
      setAdjustHeight(20);
    } else {
      setAdjustHeight(40);
    }
  }, [size]);

  const listVariants = {
    visible: {
      opacity: 1,
      height: showAllCards ? "auto" : `${calculateHeight}px`,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <m.ul
      ref={ref}
      className={listClass}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={listVariants}
    >
      {children}
    </m.ul>
  );
};

export default StaggerChildrenAnimation;
