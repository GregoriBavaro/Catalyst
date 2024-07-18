"use client";

import Link from "next/link";

import ArrowButton from "../../common/buttons/ArrowButton";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";
import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";
import LinkAnimation from "../../common/animations/linkAnimation/linkAnimation";

import classes from "./Grid.module.scss";

interface GridProps {
  data: {
    id: number;
    path: string;
    client: string;
    projectShortDescription: string;
    service: string[];
  }[];
}

const Grid = ({ data }: GridProps) => {
  return (
    <section className={classes.grid}>
      <SlideUpList listClass={classes.grid__wrapper} showAllCards>
        {data.map(({ id, path, client, projectShortDescription }) => (
          <SlideUpItems key={id} itemClass={classes.grid__item} id={0}>
            <LinkAnimation href={`portfolio/${path}`}>
              <h1>{client}</h1>
              <p>{projectShortDescription}</p>
              <ArrowButton
                label="learn more"
                classNameWrapper={classes.learnMore}
                classNameIcon={classes.icon}
              />
            </LinkAnimation>
          </SlideUpItems>
        ))}
      </SlideUpList>
    </section>
  );
};

export default Grid;
