"use client";

import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/use-WindowSize";

interface CardAnimationConfig {
  scaleStart: number;
  scaleEnd: number;
  yStart: string;
  yEnd: string;
}

interface inMotionCardsConfig {
  cardOne: CardAnimationConfig;
  cardTwo: CardAnimationConfig;
  cardThree: CardAnimationConfig;
}

export const motionCards = (): inMotionCardsConfig => {
  const size = useWindowSize();

  const [motionCardsConfig, setStackingCardsConfig] = useState<inMotionCardsConfig>({
    cardOne: {
      scaleStart: 0.6,
      scaleEnd: 1,
      yStart: "300%",
      yEnd: "-120%",
    },
    cardTwo: {
      scaleStart: 0.5,
      scaleEnd: 1,
      yStart: "280%",
      yEnd: "-120%",
    },
    cardThree: {
      scaleStart: 0.4,
      scaleEnd: 1,
      yStart: "260%",
      yEnd: "-120%",
    },
  });

  useEffect(() => {
    if ((size.width ?? 1300) < 1300) {
      setStackingCardsConfig({
        cardOne: {
          scaleStart: 0.6,
          scaleEnd: 1,
          yStart: "80%",
          yEnd: "-120%",
        },
        cardTwo: {
          scaleStart: 0.5,
          scaleEnd: 1,
          yStart: "55%",
          yEnd: "-100%",
        },
        cardThree: {
          scaleStart: 0.4,
          scaleEnd: 1,
          yStart: "10%",
          yEnd: "-70%",
        },
      });
    }
  }, [size]);

  return {
    cardOne: {
      scaleStart: motionCardsConfig.cardOne.scaleStart,
      scaleEnd: motionCardsConfig.cardOne.scaleEnd,
      yStart: motionCardsConfig.cardOne.yStart,
      yEnd: motionCardsConfig.cardOne.yEnd,
    },
    cardTwo: {
      scaleStart: motionCardsConfig.cardTwo.scaleStart,
      scaleEnd: motionCardsConfig.cardTwo.scaleEnd,
      yStart: motionCardsConfig.cardTwo.yStart,
      yEnd: motionCardsConfig.cardTwo.yEnd,
    },
    cardThree: {
      scaleStart: motionCardsConfig.cardThree.scaleStart,
      scaleEnd: motionCardsConfig.cardThree.scaleEnd,
      yStart: motionCardsConfig.cardThree.yStart,
      yEnd: motionCardsConfig.cardThree.yEnd,
    },
  };
};
