"use client";

import Link from "next/link";

import ArrowButton from "../../common/buttons/ArrowButton";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";
import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";

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
          <SlideUpItems key={id} itemClass={classes.grid__item}>
            <Link href={`portfolio/${path}`}>
              <h5>{client}</h5>
              <p>{projectShortDescription}</p>
              <ArrowButton
                label="learn more"
                classNameWrapper={classes.learnMore}
                classNameIcon={classes.icon}
              />
            </Link>
          </SlideUpItems>
        ))}
      </SlideUpList>
    </section>
  );
};

export default Grid;
