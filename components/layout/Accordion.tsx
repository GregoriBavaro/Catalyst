"use client";

import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import PlusButton from "../common/PlusButton";

import classes from "./Accordion.module.scss";

interface AccordionProps {
  heading: string;
  subHeading?: string;
  buttonLabel?: string;
  showButtonAndSubText?: string;
  data: { id: number; title: string; description: string }[];
}

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

  return (
    <section className={classes.accordion}>
      <div className={classes.text}>
        <h3>{heading}</h3>
        <div className={classes.subTextAndButton} style={{ display: showButtonAndSubText }}>
          <h6>{subHeading}</h6>
          <Button label={buttonLabel} routeTo="contact" />
        </div>
      </div>
      <ul className={classes.list}>
        {data.map(({ id, title, description }) => (
          <li key={id} onClick={() => handleClickedTopic(id)} role="presentation">
            <div className={classes.title}>
              <h5>{title}</h5>
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
    </section>
  );
};

export default Accordion;