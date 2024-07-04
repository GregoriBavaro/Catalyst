import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

import { GrLinkUp } from "react-icons/gr";

import Slider from "../../common/marquee/Marquee";
import Selector from "../selector/Selector";

import classes from "./HamburgerItems.module.scss";

interface HamburgerItemsProps {
  setOpen: (isOpen: boolean) => void;
}

const PATHS = [
  { id: 0, title: "contact", path: "/contact", animationDelay: 0.1 },
  { id: 1, title: "portfolio", path: "/portfolio", animationDelay: 0.2 },
  { id: 2, title: "about us", path: "/about", animationDelay: 0.3 },
  { id: 3, title: "services", path: "/services", animationDelay: 0.4 },
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

const listAnimation = (delayTime: number, enterDelay: number) => {
  return {
    initial: { opacity: 0, transform: "translateY(120%)" },
    animate: { opacity: 1, transform: "translateY(0%)", transition: { delay: enterDelay } },
    exit: { opacity: 0, transform: "translateY(-120%)", transition: { delay: delayTime } },
    transition: { duration: 0.3, delay: delayTime, bounce: 0 },
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

const MarqueeAnimation = {
  initial: { y: "120%" },
  animate: { y: "0%", transition: { duration: 0.3, delay: 0.6 } },
  exit: { y: "120%" },
  transition: { duration: 0.3, delay: 0 },
};

const HamburgerItems = ({ setOpen }: HamburgerItemsProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <div className={`${classes.hamburgerItems} requires-no-scroll`}>
      <div className={classes.menuOptions}>
        <div className={classes.listsWrapper}>
          <ul className={classes.paths}>
            {PATHS.map(({ id, title, animationDelay, path }) => (
              <li key={id}>
                <Link href={path}>
                  <m.div
                    {...listAnimation(animationDelay, animationDelay + 0.3)}
                    onClick={() => setOpen(false)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className={classes.title}>{title}</span>
                    <span className={`${classes.number} number`}>0{id + 1} /</span>
                  </m.div>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classes.links}>
            {LINKS.map(({ id, title, animationDelay, path }) => (
              <li key={id}>
                <m.a href={path} {...listAnimation(animationDelay, animationDelay + 0.2)}>
                  <span className={classes.title}>{title}</span>
                  <GrLinkUp />
                </m.a>
              </li>
            ))}
          </ul>
        </div>
        <m.span {...lineAnimation} className={classes.horizontalLine} />
        <div {...languagesAnimation} className={classes.languages}>
          <Selector data={LANGUAGES} animation={languagesAnimation} />
        </div>
      </div>
      <Slider text={"Let's connect"} repeatTimes={50} marqueeAnimation={MarqueeAnimation} />
    </div>
  );
};

export default HamburgerItems;
