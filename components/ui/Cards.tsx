"use client";

import { useState } from "react";
import { motion as m } from "framer-motion";

import { RiArrowDownWideFill } from "react-icons/ri";

import CardItem from "./CardItem";

import classes from "./Cards.module.scss";

interface CardsProps {
  data: {
    id: number;
    icon: string;
    title: string;
    description: string;
    path: string;
    animationDelay: number;
  }[];
  sectionName: string;
}
const Cards = ({ data, sectionName }: CardsProps) => {
  const [showAllCards, setShowAllCards] = useState<boolean>(false);
  const [firstCardHeight, setFirstCardHeight] = useState<number | null>(null);

  const handleToggleShowAllCards = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const effectiveHeight = firstCardHeight ?? 0;
  const calculateHeight = effectiveHeight * 2 + 40;

  const ulAnimation = {
    initial: { height: `${calculateHeight}px` },
    animate: { height: showAllCards ? "auto" : `${calculateHeight}px` },
  };

  return (
    <section className={classes.cardsWrapper}>
      <h4>{sectionName}</h4>
      <m.ul {...ulAnimation}>
        {data.map(({ id, icon, title, description, path, animationDelay }) => (
          <CardItem
            key={id}
            id={id}
            icon={icon}
            title={title}
            description={description}
            path={path}
            animationDelay={animationDelay}
            setCardHeight={id === 0 ? setFirstCardHeight : undefined}
            showAllCards={showAllCards}
          />
        ))}
      </m.ul>
      {data.length > 6 && (
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
    </section>
  );
};

export default Cards;
