"use client";

import { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

import CardItem from "./CardItem";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";

import classes from "./Cards.module.scss";

interface CardsProps {
  data: {
    id: number;
    title: string;
    description: string;
    path?: string;
  }[];
  heading: string;
  subHeading?: string;
  showCards: boolean;
  classWrapper?: string;
}
const Cards = ({ data, heading, subHeading, showCards, classWrapper }: CardsProps) => {
  const [showAllCards, setShowAllCards] = useState<boolean>(showCards);
  const [firstCardHeight, setFirstCardHeight] = useState<number | null>(null);

  const handleToggleShowAllCards = () => {
    setShowAllCards((prevState) => !prevState);
  };

  return (
    <section className={classes.cards}>
      <div className={`${classes.cardsWrapper} ${classWrapper}`}>
        {subHeading && (
          <div className="subHeadingWrapper">
            <span className="subHeadingSquare" />
            <h2>{subHeading}</h2>
          </div>
        )}
        <h1>{heading}</h1>
        <SlideUpList
          listClass={classes.cardsItemWrapper}
          showAllCards={showAllCards}
          firstCardHeight={firstCardHeight}
        >
          {data?.map(({ id, title, description, path }) => {
            return (
              <CardItem
                key={id}
                id={id}
                title={title}
                description={description}
                path={path}
                setCardHeight={id === 0 ? setFirstCardHeight : undefined}
                showAllCards={showAllCards}
              />
            );
          })}
        </SlideUpList>
        {data?.length > 6 && !showCards && (
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
