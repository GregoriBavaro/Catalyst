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

export const motionCards: inMotionCardsConfig = {
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
};
