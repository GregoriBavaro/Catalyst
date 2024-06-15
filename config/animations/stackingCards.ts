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

export const stackingCards: StackingCardsConfig = {
  cardOne: {
    scaleStart: 0.85,
    scaleEnd: 1,
    xStart: "0%",
    xEnd: "10%",
    yStart: "5vh",
    yEnd: "10vh",
    rotateStart: "-10deg",
    rotateEnd: "20deg",
  },
  cardTwo: {
    scaleStart: 0.9,
    scaleEnd: 0.8,
    xStart: "25%",
    xEnd: "125%",
    yStart: "10vh",
    yEnd: "10vh",
    rotateStart: "0deg",
    rotateEnd: "40deg",
  },
  cardThree: {
    scaleStart: 1.03,
    scaleEnd: 0.6,
    xStart: "53%",
    xEnd: "230%",
    yStart: "8vh",
    yEnd: "10vh",
    rotateStart: "10deg",
    rotateEnd: "-10deg",
  },
};
