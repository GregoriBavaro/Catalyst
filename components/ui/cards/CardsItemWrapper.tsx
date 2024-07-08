"use client";

import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import useWindowSize from "../../../hooks/use-WindowSize";

import classes from "./CardsItemWrapper.module.scss";

interface CardsItemWrapperProps {
  children: React.ReactNode;
  showAllCards: boolean;
  firstCardHeight: number | null;
}

const CardsItemWrapper = ({ children, showAllCards, firstCardHeight }: CardsItemWrapperProps) => {
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

  const ulAnimation = {
    initial: false,
    animate: { height: showAllCards ? "auto" : `${calculateHeight}px` },
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  };

  return (
    <m.ul className={classes.cardsItemWrapper} {...ulAnimation}>
      {children}
    </m.ul>
  );
};

export default CardsItemWrapper;
