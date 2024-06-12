import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion as m, useInView } from "framer-motion";
import useWindowSize from "../../hooks/use-WindowSize";

import ArrowButton from "../common/ArrowButton";

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
  const isInView = useInView(ref, { once: true });
  const size = useWindowSize();

  useEffect(() => {
    if (ref.current && setCardHeight) {
      setCardHeight(ref.current.offsetHeight);
    }
  }, [isInView, setCardHeight, size.width, showAllCards]);

  return (
    <m.li
      key={id}
      ref={ref}
      initial={{ opacity: 0, y: "5rem" }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : "5rem",
      }}
      transition={{ duration: 0.3, delay: animationDelay, ease: "easeIn" }}
      className={classes.cardItem}
    >
      {path ? (
        <Link href={path}>
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
    </m.li>
  );
};

export default CardItem;
