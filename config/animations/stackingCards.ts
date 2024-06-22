"use client";

import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/use-WindowSize";

interface CardAnimationConfig {
  scaleStart: number;
  scaleEnd: number;
  xStart: string;
  xEnd: string;
  yStart: string;
  yEnd: string;
  rotateStart: string;
  rotateEnd: string;
}

interface StackingCardsConfig {
  cardOne: CardAnimationConfig;
  cardTwo: CardAnimationConfig;
  cardThree: CardAnimationConfig;
}

export const stackingCards = (): StackingCardsConfig => {
  const size = useWindowSize();

  const [stackingCardsConfig, setStackingCardsConfig] = useState<StackingCardsConfig>({
    cardOne: {
      xEnd: "15%",
      xStart: "0%",
      yStart: "0vh",
      yEnd: "0vh",
      rotateStart: "-15deg",
      rotateEnd: "-0deg",
      scaleStart: 0.8,
      scaleEnd: 1,
    },
    cardTwo: {
      xEnd: "57%",
      xStart: "22%",
      yStart: "8vh",
      yEnd: "0vh",
      rotateStart: "0deg",
      rotateEnd: "10deg",
      scaleStart: 0.9,
      scaleEnd: 0.95,
    },
    cardThree: {
      xEnd: "95%",
      xStart: "45%",
      yStart: "6vh",
      yEnd: "0vh",
      rotateStart: "10deg",
      rotateEnd: "0deg",
      scaleStart: 1,
      scaleEnd: 0.8,
    },
  });

  useEffect(() => {
    if ((size.width ?? 1600) < 1660 && (size.width ?? 1570) > 1570) {
      setStackingCardsConfig({
        cardOne: {
          xEnd: "5%",
          xStart: "0%",
          yStart: "0",
          yEnd: "0vh",
          rotateStart: "-15deg",
          rotateEnd: "-0deg",
          scaleStart: 0.8,
          scaleEnd: 1,
        },
        cardTwo: {
          xEnd: "50%",
          xStart: "22%",
          yStart: "8vh",
          yEnd: "0vh",
          rotateStart: "0deg",
          rotateEnd: "10deg",
          scaleStart: 0.9,
          scaleEnd: 0.95,
        },
        cardThree: {
          xEnd: "90%",
          xStart: "45%",
          yStart: "6vh",
          yEnd: "0vh",
          rotateStart: "10deg",
          rotateEnd: "0deg",
          scaleStart: 1,
          scaleEnd: 0.8,
        },
      });
    } else if ((size.width ?? 1570) < 1570 && (size.width ?? 1470) > 1470) {
      setStackingCardsConfig({
        cardOne: {
          xEnd: "10%",
          xStart: "0%",
          yStart: "0",
          yEnd: "0vh",
          rotateStart: "-15deg",
          rotateEnd: "-0deg",
          scaleStart: 0.8,
          scaleEnd: 1,
        },
        cardTwo: {
          xEnd: "62%",
          xStart: "22%",
          yStart: "8vh",
          yEnd: "0vh",
          rotateStart: "0deg",
          rotateEnd: "10deg",
          scaleStart: 0.9,
          scaleEnd: 0.95,
        },
        cardThree: {
          xEnd: "107%",
          xStart: "45%",
          yStart: "6vh",
          yEnd: "0vh",
          rotateStart: "10deg",
          rotateEnd: "0deg",
          scaleStart: 1,
          scaleEnd: 0.8,
        },
      });
    } else if ((size.width ?? 1470) < 1470 && (size.width ?? 1370) > 1370) {
      setStackingCardsConfig({
        cardOne: {
          xStart: "0%",
          xEnd: "10%",
          yStart: "0",
          yEnd: "0vh",
          rotateStart: "-15deg",
          rotateEnd: "-0deg",
          scaleStart: 0.8,
          scaleEnd: 1,
        },
        cardTwo: {
          xStart: "22%",
          xEnd: "67%",
          yStart: "8vh",
          yEnd: "0vh",
          rotateStart: "0deg",
          rotateEnd: "10deg",
          scaleStart: 0.9,
          scaleEnd: 0.95,
        },
        cardThree: {
          xStart: "45%",
          xEnd: "116%",
          yStart: "6vh",
          yEnd: "0vh",
          rotateStart: "10deg",
          rotateEnd: "0deg",
          scaleStart: 1,
          scaleEnd: 0.8,
        },
      });
    } else if ((size.width ?? 1370) < 1370 && (size.width ?? 1300) > 1300) {
      setStackingCardsConfig({
        cardOne: {
          xStart: "0%",
          xEnd: "10%",
          yStart: "5vh",
          yEnd: "0vh",
          rotateStart: "-15deg",
          rotateEnd: "-0deg",
          scaleStart: 0.8,
          scaleEnd: 1,
        },
        cardTwo: {
          xStart: "22%",
          xEnd: "73%",
          yStart: "8vh",
          yEnd: "9vh",
          rotateStart: "0deg",
          rotateEnd: "10deg",
          scaleStart: 0.9,
          scaleEnd: 0.95,
        },
        cardThree: {
          xStart: "45%",
          xEnd: "120%",
          yStart: "6vh",
          yEnd: "0vh",
          rotateStart: "10deg",
          rotateEnd: "0deg",
          scaleStart: 1,
          scaleEnd: 0.8,
        },
      });
    } else if ((size.width ?? 1300) < 1300) {
      setStackingCardsConfig({
        cardOne: {
          xStart: "40%",
          xEnd: "35%",
          yStart: "0rem",
          yEnd: "0rem",
          rotateStart: "0deg",
          rotateEnd: "-15deg",
          scaleStart: 1,
          scaleEnd: 0.8,
        },
        cardTwo: {
          xStart: "80%",
          xEnd: "50%",
          yStart: "0rem",
          yEnd: "2rem",
          rotateStart: "10deg",
          rotateEnd: "0deg",
          scaleStart: 0.95,
          scaleEnd: 0.9,
        },
        cardThree: {
          xStart: "120%",
          xEnd: "70%",
          yStart: "0rem",
          yEnd: "1rem",
          rotateStart: "0deg",
          rotateEnd: "10deg",
          scaleStart: 0.8,
          scaleEnd: 1,
        },
      });
    }
  }, [size]);

  return {
    cardOne: {
      scaleStart: stackingCardsConfig.cardOne.scaleStart,
      scaleEnd: stackingCardsConfig.cardOne.scaleEnd,
      xStart: stackingCardsConfig.cardOne.xStart,
      xEnd: stackingCardsConfig.cardOne.xEnd,
      yStart: stackingCardsConfig.cardOne.yStart,
      yEnd: stackingCardsConfig.cardOne.yEnd,
      rotateStart: stackingCardsConfig.cardOne.rotateStart,
      rotateEnd: stackingCardsConfig.cardOne.rotateEnd,
    },
    cardTwo: {
      scaleStart: stackingCardsConfig.cardTwo.scaleStart,
      scaleEnd: stackingCardsConfig.cardTwo.scaleEnd,
      xStart: stackingCardsConfig.cardTwo.xStart,
      xEnd: stackingCardsConfig.cardTwo.xEnd,
      yStart: stackingCardsConfig.cardTwo.yStart,
      yEnd: stackingCardsConfig.cardTwo.yEnd,
      rotateStart: stackingCardsConfig.cardTwo.rotateStart,
      rotateEnd: stackingCardsConfig.cardTwo.rotateEnd,
    },
    cardThree: {
      scaleStart: stackingCardsConfig.cardThree.scaleStart,
      scaleEnd: stackingCardsConfig.cardThree.scaleEnd,
      xStart: stackingCardsConfig.cardThree.xStart,
      xEnd: stackingCardsConfig.cardThree.xEnd,
      yStart: stackingCardsConfig.cardThree.yStart,
      yEnd: stackingCardsConfig.cardThree.yEnd,
      rotateStart: stackingCardsConfig.cardThree.rotateStart,
      rotateEnd: stackingCardsConfig.cardThree.rotateEnd,
    },
  };
};
