import { useRef, useEffect } from "react";
import Link from "next/link";
import useWindowSize from "../../../hooks/use-WindowSize";

import ArrowButton from "../../common/buttons/ArrowButton";
import InViewAnimation from "../../common/animations/SlideUpAnimation";

import classes from "./CardItem.module.scss";

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  path?: string;
  animationDelay: number;
  showAllCards: boolean;
  setCardHeight?: (height: number) => void;
}

const CardItem = ({
  id,
  title,
  description,
  path,
  animationDelay,
  showAllCards,
  setCardHeight,
}: CardItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  const size = useWindowSize();

  useEffect(() => {
    if (ref.current && setCardHeight) {
      setCardHeight(ref.current.offsetHeight);
    }
  }, [setCardHeight, size.width, showAllCards]);

  return (
    <li key={id} ref={ref} className={classes.cardItem}>
      <InViewAnimation animationDelay={animationDelay}>
        {path ? (
          <Link href={`/services/${path}`}>
            <h6>{title}</h6>
            <p>{description}</p>
            <ArrowButton
              label="learn more"
              classNameWrapper={classes.learnMore}
              classNameIcon={classes.icon}
            />
          </Link>
        ) : (
          <div className={classes.noHrefCard}>
            <h6>{title}</h6>
            <p>{description}</p>
          </div>
        )}
      </InViewAnimation>
    </li>
  );
};

export default CardItem;
