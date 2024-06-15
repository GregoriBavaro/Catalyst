"use client";

import React, { useRef } from "react";
import { motion as m, useTransform, MotionValue, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import classes from "./StackingCardsAnimation.module.scss";

interface StackingCardsProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: StaticImageData;
    xEnd: string;
    xStart: string;
    yEnd: string;
    yStart: string;
    rotateEnd: string;
    rotateStart: string;
    scaleEnd: number;
    scaleStart: number;
  }[];
}

const XProgress = (xEnd: string, xStart: string, scrollYProgress: MotionValue<number>) => {
  return useTransform(scrollYProgress, [0, 1], [xEnd, xStart]);
};

const YProgress = (yEnd: string, yStart: string, scrollYProgress: MotionValue<number>) => {
  return useTransform(scrollYProgress, [0, 1], [yEnd, yStart]);
};

const RotateProgress = (
  rotateEnd: string,
  rotateStart: string,
  scrollYProgress: MotionValue<number>
) => {
  return useTransform(scrollYProgress, [0, 1], [rotateEnd, rotateStart]);
};

const ScaleProgress = (
  scaleEnd: number,
  scaleStart: number,
  scrollYProgress: MotionValue<number>
) => {
  return useTransform(scrollYProgress, [0, 1], [scaleEnd, scaleStart]);
};

const StackingCardsAnimation = ({ data }: StackingCardsProps) => {
  const ref = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.18 1"],
  });

  return (
    <ul ref={ref} className={classes.stackingCardsWrapper}>
      {data.map(
        ({
          id,
          title,
          description: serviceDescription,
          icon,
          xEnd,
          xStart,
          yStart,
          yEnd,
          rotateEnd,
          rotateStart,
          scaleEnd,
          scaleStart,
        }) => (
          <m.li
            className={classes.stackingCards}
            key={id}
            style={{
              scale: ScaleProgress(scaleEnd, scaleStart, scrollYProgress),
              left: XProgress(xEnd, xStart, scrollYProgress),
              bottom: YProgress(yEnd, yStart, scrollYProgress),
              rotate: RotateProgress(rotateEnd, rotateStart, scrollYProgress),
            }}
          >
            <div className={classes.stackingCardsIcon}>
              <Image src={icon} alt="icon" />
            </div>
            <div className={classes.stackingCardsTextWrapper}>
              <h5>{title}</h5>
              <p>{serviceDescription}</p>
            </div>
          </m.li>
        )
      )}
    </ul>
  );
};

export default StackingCardsAnimation;
