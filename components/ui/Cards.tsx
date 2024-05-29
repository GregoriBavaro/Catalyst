"use client";

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
  return (
    <section className={classes.cardsWrapper}>
      <h4>{sectionName}</h4>
      <ul>
        {data.map(({ id, icon, title, description, path, animationDelay }) => (
          <CardItem
            key={id}
            id={id}
            icon={icon}
            title={title}
            description={description}
            path={path}
            animationDelay={animationDelay}
          />
        ))}
      </ul>
    </section>
  );
};

export default Cards;
