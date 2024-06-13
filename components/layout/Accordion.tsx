"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";
import Button from "../common/buttons/Button";
import PlusButton from "../common/buttons/PlusButton";

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
      <div className={classes.accordionWrapper}>
        <div className={classes.text}>
          <h5>{heading}</h5>
          <div className={classes.subTextAndButton} style={{ display: showButtonAndSubText }}>
            <h6>{subHeading}</h6>
            <Link href="contact">
              <Button label={buttonLabel} />
            </Link>
          </div>
        </div>
        <ul className={classes.list}>
          {data.map(({ id, title, description }) => (
            <li key={id} onClick={() => handleClickedTopic(id)} role="presentation">
              <div className={classes.title}>
                <h6>{title}</h6>
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
