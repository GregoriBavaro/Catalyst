import ArrowButton from "../../common/buttons/ArrowButton";
import InViewAnimation from "../../common/animations/SlideUpAnimation";

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
            <h6>{subHeading}</h6>
          </div>
          <h4>{heading}</h4>
          <ArrowButton label="About our company" routeTo="about" />
        </div>
        <ul>
          {data.map(({ id, title, text, animationDelay }) => (
            <li key={id}>
              <InViewAnimation animationDelay={animationDelay}>
                <span className="number">0{id + 1} /</span>
                <h5>{title}</h5>
                <p>{text}</p>
              </InViewAnimation>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Box;
