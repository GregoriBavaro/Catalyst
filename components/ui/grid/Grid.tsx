"use client";

import ArrowButton from "../../common/buttons/ArrowButton";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";
import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";
import PageTransition from "../../common/animations/pageTransitionAnimation/pageTransitionAnimation";

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
            <PageTransition href={`portfolio/${path}`}>
              <h1>{client}</h1>
              <p>{projectShortDescription}</p>
              <ArrowButton
                label="learn more"
                classNameWrapper={classes.learnMore}
                classNameIcon={classes.icon}
              />
            </PageTransition>
          </SlideUpItems>
        ))}
      </SlideUpList>
    </section>
  );
};

export default Grid;
