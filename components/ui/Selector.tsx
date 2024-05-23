"use client";

import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { GrDown } from "react-icons/gr";
import classes from "./Selector.module.scss";

interface SelectorInterface {
  data: { id: number; title: string; tag: string; animationDelay: number }[];
  animation: {};
}

const initialAndExitStyle = {
  clipPath: "inset(10% 50% 90% 50% round 2px)",
  transition: {
    type: "spring",
    bounce: 0,
    duration: 0.3,
  },
};

const selectOptionsAnimation = {
  initial: initialAndExitStyle,
  animate: {
    clipPath: "inset(0% 0% 0% 0% round 2px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
    },
  },
  exit: initialAndExitStyle,
};

const Selector: React.FC<SelectorInterface> = ({ data, animation }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(data[0].title);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleSelectedItem = (title: string) => {
    setSelected(title);
    setOpen(false);
  };

  const listAnimation = (delayTime: number) => {
    return {
      initial: { opacity: 0, y: "-5rem" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "-5rem", transition: { delay: delayTime } },
      transition: { duration: 0.3, delay: delayTime },
    };
  };

  return (
    <m.div {...animation} className={classes.selector}>
      <div
        className={classes.select}
        onClick={handleOpen}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpen()}
        role="button"
        tabIndex={0}
      >
        <span>{selected}</span>
        <span>
          <GrDown
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", cursor: "pointer" }}
          />
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <m.div {...selectOptionsAnimation} className={classes.selectOptions}>
            <ul>
              {data.map(({ id, title, animationDelay }) => (
                <li
                  key={id}
                  onClick={() => handleSelectedItem(title)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && handleSelectedItem(title)
                  }
                  role="menuitem"
                  tabIndex={0}
                >
                  <m.p {...listAnimation(animationDelay)}>{title}</m.p>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default Selector;
