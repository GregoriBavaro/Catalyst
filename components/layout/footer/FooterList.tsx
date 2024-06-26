"use client";

import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PlusButton from "../../common/buttons/PlusButton";
import useWindowSize from "../../../hooks/use-WindowSize";

import classes from "./FooterList.module.scss";

import { FOOTER_DATA } from "../../../db/footer";

const topicStyles = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

const FooterList = () => {
  const size = useWindowSize();
  const [clickedTopic, setClickedTopic] = useState<{ [id: number]: boolean }>({});

  const handleClickedTopic = (id: number) => {
    if ((size.width ?? 1100) > 1100) {
      return;
    }
    setClickedTopic((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className={classes.footerList}>
      {FOOTER_DATA.map(({ id, title, links }) => (
        <li
          key={id}
          className={classes.footerListLi}
          onClick={() => handleClickedTopic(id)}
          role="presentation"
        >
          <div className={classes.title}>
            <p>{title}</p>
            <PlusButton trigger={clickedTopic[id]} />
          </div>
          <AnimatePresence>
            {(clickedTopic[id] || (size.width ?? 1100) > 1100) && (
              <m.ul {...topicStyles} className={classes.footerLinkList}>
                {links.map(({ id: linkId, linksTitle, link }) => (
                  <li key={linkId} className={classes.footerLinkListLi}>
                    <Link href={link}>{linksTitle}</Link>
                  </li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
