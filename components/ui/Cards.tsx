import Link from "next/link";

import classes from "./Cards.module.scss";

interface CardsProps {
  data: { id: number; icon: string; title: string; description: string; path: string }[];
  sectionName: string;
}
const Cards = ({ data, sectionName }: CardsProps) => {
  return (
    <section className={classes.cardsWrapper}>
      <h4>{sectionName}</h4>
      <ul>
        {data.map(({ id, icon, title, description, path }) => (
          <li key={id}>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cards;
