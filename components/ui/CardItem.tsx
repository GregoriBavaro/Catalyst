import { useRef } from "react";
import Link from "next/link";
import { motion as m, useInView } from "framer-motion";

import classes from "./CardItem.module.scss";

interface CardItemProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  path: string;
  animationDelay: number;
}

const CardItem = ({ id, icon, title, description, path, animationDelay }: CardItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const isInView = useInView(ref, { once: true });

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
      <Link href={path}>
        {icon && <span>{icon}</span>}
        <h6>{title}</h6>
        <p>{description}</p>
        <div className={classes.learnMore}>
          <span className={classes.circle} aria-hidden="true">
            <span className={`${classes.icon} ${classes.arrow}`} />
          </span>
          <p>Learn more</p>
        </div>
      </Link>
    </m.li>
  );
};

export default CardItem;
