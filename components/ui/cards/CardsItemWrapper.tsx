import React from "react";
import { motion as m } from "framer-motion";

import classes from "./CardsItemWrapper.module.scss";

interface CardsItemWrapperProps {
  children: React.ReactNode;
  showAllCards: boolean;
  firstCardHeight: number | null;
}

const CardsItemWrapper = ({ children, showAllCards, firstCardHeight }: CardsItemWrapperProps) => {
  const effectiveHeight = firstCardHeight ?? 0;
  const calculateHeight = effectiveHeight * 2 + 40;

  const ulAnimation = {
    initial: { height: "auto" },
    animate: { height: showAllCards ? "auto" : `${calculateHeight}px` },
  };

  return (
    <m.ul className={classes.cardsItemWrapper} {...ulAnimation}>
      {children}
    </m.ul>
  );
};

export default CardsItemWrapper;
