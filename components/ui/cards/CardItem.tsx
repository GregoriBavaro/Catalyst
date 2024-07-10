import { useRef, useEffect } from "react";
import Link from "next/link";
import useWindowSize from "../../../hooks/use-WindowSize";

import ArrowButton from "../../common/buttons/ArrowButton";
import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";

import classes from "./CardItem.module.scss";

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  path?: string;
  showAllCards: boolean;
  setCardHeight?: (height: number) => void;
}

const CardItem = ({ id, title, description, path, showAllCards, setCardHeight }: CardItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  const size = useWindowSize();

  useEffect(() => {
    if (ref.current && setCardHeight) {
      setCardHeight(ref.current.offsetHeight);
    }
  }, [setCardHeight, size, showAllCards]);

  return (
    <SlideUpItems key={id} forwardRef={ref} itemClass={classes.cardItem}>
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
        <>
          <h6>{title}</h6>
          <p>{description}</p>
        </>
      )}
    </SlideUpItems>
  );
};

export default CardItem;
