// "use client";

// import { useState, useEffect } from "react";
// import useWindowSize from "../../hooks/use-WindowSize";

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
  // const size = useWindowSize();

  return {
    cardOne: {
      scaleStart: 1,
      scaleEnd: 0.80,
      xStart: "15%",
      xEnd: "0%",
      yStart: "5vh",
      yEnd: "10vh",
      rotateStart: "0deg",
      rotateEnd: "-15deg",
    },
    cardTwo: {
      scaleStart: 0.95,
      scaleEnd: 0.9,
      xStart: "60%",
      xEnd: "22%",
      yStart: "7vh",
      yEnd: "12vh",
      rotateStart: "10deg",
      rotateEnd: "0deg",
    },
    cardThree: {
      scaleStart: 0.8,
      scaleEnd: 1,
      xStart: "100%",
      xEnd: "45%",
      yStart: "3vh",
      yEnd: "10vh",
      rotateStart: "0deg",
      rotateEnd: "10deg",
    },
  };
};
