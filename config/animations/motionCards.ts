"use client";

import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/use-WindowSize";

interface CardAnimationConfig {
  scaleStart: number;
  scaleEnd: number;
  yStart: string;
  yEnd: string;
}

interface InMotionCardsConfig {
  cardOne: CardAnimationConfig;
  cardTwo: CardAnimationConfig;
  cardThree: CardAnimationConfig;
}

export const motionCards = (): InMotionCardsConfig => {
  const size = useWindowSize();

  const [motionCardsConfig, setStackingCardsConfig] = useState<InMotionCardsConfig>({
    cardOne: {
      scaleStart: 0.6,
      scaleEnd: 1,
      yStart: "280%",
      yEnd: "-200%",
    },
    cardTwo: {
      scaleStart: 0.5,
      scaleEnd: 1,
      yStart: "300%",
      yEnd: "-200%",
    },
    cardThree: {
      scaleStart: 0.4,
      scaleEnd: 1,
      yStart: "220%",
      yEnd: "-160%",
    },
  });

  useEffect(() => {
    if ((size.width ?? 1300) < 1300 && (size.width ?? 950) > 950) {
      setStackingCardsConfig({
        cardOne: {
          scaleStart: 1,
          scaleEnd: 1,
          yStart: "40%",
          yEnd: "0%",
        },
        cardTwo: {
          scaleStart: 1,
          scaleEnd: 1,
          yStart: "80%",
          yEnd: "0%",
        },
        cardThree: {
          scaleStart: 1,
          scaleEnd: 1,
          yStart: "120%",
          yEnd: "0%",
        },
      });
    } else if ((size.width ?? 950) < 950) {
      setStackingCardsConfig({
        cardOne: {
          scaleStart: 1,
          scaleEnd: 1,
          yStart: "40%",
          yEnd: "-35%",
        },
        cardTwo: {
          scaleStart: 1,
          scaleEnd: 1,
          yStart: "40%",
          yEnd: "-35%",
        },
        cardThree: {
          scaleStart: 1,
          scaleEnd: 1,
          yStart: "40%",
          yEnd: "-35%",
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
