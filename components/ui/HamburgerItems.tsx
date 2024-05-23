import React from "react";
import { motion as m } from "framer-motion";

import { GrLinkUp } from "react-icons/gr";

import Slider from "../common/Marquee";
import Selector from "./Selector";

import classes from "./HamburgerItems.module.scss";

interface HamburgerItemsProps {
  isOpen: boolean;
}

const PATHS = [
  { id: 0, title: "contact", path: "", animationDelay: 0.1 },
  { id: 1, title: "portfolio", path: "", animationDelay: 0.2 },
  { id: 2, title: "about us", path: "", animationDelay: 0.3 },
  { id: 3, title: "services", path: "", animationDelay: 0.4 },
];

const LINKS = [
  { id: 0, title: "follow us on instagram", path: "", animationDelay: 0.1 },
  { id: 1, title: "email us", path: "", animationDelay: 0.2 },
  { id: 2, title: "give us a call", path: "", animationDelay: 0.3 },
];

const LANGUAGES = [
  { id: 0, title: "US-EN", tag: "en", animationDelay: 0.2 },
  { id: 1, title: "МК", tag: "mk", animationDelay: 0.4 },
];

const listAnimation = (delayTime: number) => {
  return {
    initial: { opacity: 0, y: "-5rem" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-5rem", transition: { delay: delayTime } },
    transition: { duration: 0.3, delay: delayTime },
  };
};

const lineAnimation = {
  initial: { width: "0%" },
  animate: { width: "100%", transition: { delay: 0.5 } },
  exit: { width: "0%" },
  transition: { duration: 0.3 },
};

const languagesAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: { duration: 0.3, delay: 0.3 },
};

const HamburgerItems: React.FC<HamburgerItemsProps> = ({ isOpen }) => {
  return (
    <div className={classes.hamburgerItems}>
      {isOpen && (
        <>
          <div className={classes.menuOptions}>
            <div className={classes.listsWrapper}>
              <ul className={classes.paths}>
                {PATHS.map(({ id, title, animationDelay }) => (
                  <li key={id}>
                    <m.div {...listAnimation(animationDelay)}>
                      <span className={classes.title}>{title}</span>
                      <span className={classes.number}>0{id + 1} /</span>
                    </m.div>
                  </li>
                ))}
              </ul>
              <ul className={classes.links}>
                {LINKS.map(({ id, title, animationDelay }) => (
                  <li key={id}>
                    <m.div {...listAnimation(animationDelay)}>
                      <span className={classes.title}>{title}</span>
                      <GrLinkUp />
                    </m.div>
                  </li>
                ))}
              </ul>
            </div>
            <m.span {...lineAnimation} className={classes.horizontalLine} />
            <div {...languagesAnimation} className={classes.languages}>
              <Selector data={LANGUAGES} animation={languagesAnimation} />
            </div>
          </div>
          <Slider text={"Let's connect"} className={classes.slider} repeatTimes={50} />
        </>
      )}
    </div>
  );
};

export default HamburgerItems;
