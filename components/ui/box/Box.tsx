import ArrowButton from "../../common/buttons/ArrowButton";
import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";

import classes from "./Box.module.scss";

interface BoxProps {
  heading: string;
  subHeading: string;
  data: { id: number; title: string; text: string; animationDelay: number }[];
}

const Box = ({ heading, subHeading, data }: BoxProps) => {
  return (
    <section className={classes.box}>
      <div className={classes.boxWrapper}>
        <div className={classes.headingText}>
          <div className="subHeadingWrapper">
            <span className="subHeadingSquare" />
            <h2>{subHeading}</h2>
          </div>
          <h1>{heading}</h1>
          <ArrowButton label="About our company" routeTo="about" />
        </div>
        <SlideUpList showAllCards listClass={classes.boxList}>
          {data.map(({ id, title, text }) => (
            <SlideUpItems key={id} itemClass={classes.boxItem} id={0}>
              <span className="number">0{id + 1} /</span>
              <h1>{title}</h1>
              <p>{text}</p>
            </SlideUpItems>
          ))}
        </SlideUpList>
      </div>
    </section>
  );
};

export default Box;
