import React from "react";
import { motion as m } from "framer-motion";

import classes from "./HamburgerItems.module.scss";

interface HamburgerItemsProps {
  isOpen: boolean;
}

const DATA = [
  { id: 0, title: "portfolio", path: "", animationDelay: 0.1 },
  { id: 1, title: "about us", path: "", animationDelay: 0.2 },
  { id: 2, title: "services", path: "", animationDelay: 0.3 },
];

const listAnimation = (delayTime: number) => {
  return {
    initial: { opacity: 0, y: "-10%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-10%", transition: { delay: delayTime } },
    transition: { duration: 0.3, delay: delayTime },
  };
};

const HamburgerItems: React.FC<HamburgerItemsProps> = ({ isOpen }) => {
  return (
    <div className={classes.hamburgerItems}>
      {isOpen && (
        <ul>
          {DATA.map(({ id, title, animationDelay }) => (
            <m.li {...listAnimation(animationDelay)} key={id}>
              {title}
            </m.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerItems;
