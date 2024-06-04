"use client";

import { motion as m } from "framer-motion";

import classes from "./PlusButton.module.scss";

interface PlusButtonProps {
  trigger: boolean;
}

const PlusButton = ({ trigger }: PlusButtonProps) => {
  const line2Animation = {
    initial: false,
    animate: { transform: !trigger ? "rotate(-90deg)" : "rotate(0deg)" },
  };

  return (
    <div className={classes.plus}>
      <span className={classes.line1} />
      <m.span {...line2Animation} className={classes.line2} />
    </div>
  );
};

export default PlusButton;
