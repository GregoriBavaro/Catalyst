"use client";

import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Button from "../../common/buttons/Button";
import PlusButton from "../../common/buttons/PlusButton";

import LinkAnimation from "../../common/animations/linkAnimation/linkAnimation";

import classes from "./Accordion.module.scss";

interface AccordionProps {
  heading: string;
  subHeading?: string;
  buttonLabel?: string;
  showButtonAndSubText?: string;
  data: { id: number; title: string; description: string }[];
}

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
  transition: {
    ease: [0.65, 0, 0.35, 1],
  },
};

const Accordion = ({
  heading,
  subHeading,
  buttonLabel,
  showButtonAndSubText,
  data,
}: AccordionProps) => {
  const [clickedTopic, setClickedTopic] = useState<{ [id: number]: boolean }>({});

  const handleClickedTopic = (id: number) => {
    setClickedTopic((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={classes.accordion}>
      <div className={classes.accordionWrapper}>
        <div className={classes.text}>
          <h1>{heading}</h1>
          <div className={classes.subTextAndButton} style={{ display: showButtonAndSubText }}>
            <h2>{subHeading}</h2>
            <LinkAnimation href="contact">
              <Button label={buttonLabel} />
            </LinkAnimation>
          </div>
        </div>
        <ul className={classes.list}>
          {data.map(({ id, title, description }) => (
            <li key={id} onClick={() => handleClickedTopic(id)} role="presentation">
              <div className={classes.title}>
                <h2>{title}</h2>
                <PlusButton trigger={clickedTopic[id]} />
              </div>
              <AnimatePresence>
                {clickedTopic[id] && (
                  <m.div {...topicStyles} className={classes.description}>
                    <p>{description}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
