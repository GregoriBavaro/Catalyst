"use client";

import { useState } from "react";

import { RiArrowDownWideFill } from "react-icons/ri";

import CardItem from "./CardItem";
import CardsItemWrapper from "./CardsItemWrapper";

import classes from "./Cards.module.scss";

interface CardsProps {
  data: {
    id: number;
    title: string;
    description: string;
    path?: string;
    animationDelay: number;
  }[];
  heading: string;
  subHeading?: string;
}
const Cards = ({ data, heading, subHeading }: CardsProps) => {
  const [showAllCards, setShowAllCards] = useState<boolean>(false);
  const [firstCardHeight, setFirstCardHeight] = useState<number | null>(null);

  const handleToggleShowAllCards = () => {
    setShowAllCards((prevState) => !prevState);
  };

  return (
    <section className={classes.cards}>
      <div className={classes.cardsWrapper}>
        {subHeading && (
          <div className="subHeadingWrapper">
            <span className="subHeadingSquare" />
            <h6>{subHeading}</h6>
          </div>
        )}
        <h4>{heading}</h4>
        <CardsItemWrapper showAllCards={showAllCards} firstCardHeight={firstCardHeight}>
          {data?.map(({ id, title, description, path, animationDelay }) => (
            <CardItem
              key={id}
              id={id}
              title={title}
              description={description}
              path={path}
              animationDelay={animationDelay}
              setCardHeight={id === 0 ? setFirstCardHeight : undefined}
              showAllCards={showAllCards}
            />
          ))}
        </CardsItemWrapper>
        {data?.length > 6 && (
          <button
            type="button"
            onClick={handleToggleShowAllCards}
            aria-label={showAllCards ? "Show Less" : "Show More"}
          >
            <RiArrowDownWideFill
              style={{ transform: showAllCards ? "rotate(-180deg)" : "rotate(0deg)" }}
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default Cards;
