"use client";

import React, { useRef } from "react";
import { motion as m, useTransform, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { stackingCards } from "../../../../config/animations";

import classes from "./StackingCardsAnimation.module.scss";

interface StackingCardsProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: StaticImageData;
  }[];
}

const StackingCardsAnimation = ({ data }: StackingCardsProps) => {
  const ref = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.3", "1.18 1"],
  });

  const GetTransform = (end: string | number, start: string | number) => {
    return useTransform(scrollYProgress, [0, 1], [end, start]);
  };

  const { cardOne, cardTwo, cardThree } = stackingCards();
  const cardsConfig = [cardOne, cardTwo, cardThree];

  return (
    <ul ref={ref} className={classes.stackingCardsWrapper}>
      {data.map(({ id, title, description: serviceDescription, icon }) => {
        const { xEnd, xStart, yEnd, yStart, rotateEnd, rotateStart, scaleEnd, scaleStart } =
          cardsConfig[id];

        const scale = GetTransform(scaleEnd, scaleStart);
        const x = GetTransform(xEnd, xStart);
        const marginBottom = GetTransform(yEnd, yStart);
        const rotate = GetTransform(rotateEnd, rotateStart);

        return (
          <m.li
            className={classes.stackingCards}
            key={id}
            style={{
              scale,
              left: x,
              marginBottom,
              rotate,
            }}
          >
            <div className={classes.stackingCardsIcon}>
              <Image src={icon} alt={title} priority />
            </div>
            <div className={classes.stackingCardsTextWrapper}>
              <h1>{title}</h1>
              <p>{serviceDescription}</p>
            </div>
          </m.li>
        );
      })}
    </ul>
  );
};

export default StackingCardsAnimation;
