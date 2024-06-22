"use client";

import React, { useRef } from "react";
import { motion as m, useTransform, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { motionCards } from "../../../config/animations";

import classes from "./MotionCardsAnimation.module.scss";

interface MotionCardsProps {
  data: {
    id: number;
    title: string;
    icon: StaticImageData;
    description: string;
  }[];
}

const MotionCards = ({ data }: MotionCardsProps) => {
  const ref = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2 1"],
  });

  const GetTransform = (start: number | string, end: number | string) => {
    return useTransform(scrollYProgress, [0, 1], [start, end]);
  };

  const { cardOne, cardTwo, cardThree } = motionCards();
  const cardsConfig = [cardOne, cardTwo, cardThree];

  return (
    <ul ref={ref} className={classes.motionCardsWrapper}>
      {data.map(({ id, title, description, icon }) => {
        const { yStart, yEnd, scaleStart, scaleEnd } = cardsConfig[id];
        const y = GetTransform(yStart, yEnd);
        const scale = GetTransform(scaleStart, scaleEnd);

        return (
          <m.li
            key={id}
            className={classes.motionCards}
            style={{
              y,
              scale,
            }}
          >
            <div className={classes.motionCardsIcon}>
              <Image src={icon} alt={title} />
            </div>
            <div className={classes.motionCardsTextWrapper}>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </m.li>
        );
      })}
    </ul>
  );
};

export default MotionCards;
