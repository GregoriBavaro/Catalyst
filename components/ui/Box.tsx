import ArrowButton from "../common/ArrowButton";

import classes from "./Box.module.scss";

interface BoxProps {
  heading: string;
  subHeading: string;
  data: { id: number; title: string; text: string }[];
}

const Box = ({ heading, subHeading, data }: BoxProps) => {
  return (
    <section className={classes.box}>
      <div className={classes.headingText}>
        <div>
          <span className="headingSquare" />
          <h6>{subHeading}</h6>
        </div>
        <h4>{heading}</h4>
        <ArrowButton label="About our company" routeTo="about" />
      </div>
      <ul>
        {data.map(({ id, title, text }) => (
          <li key={id}>
            <span className="number">0{id + 1} /</span>
            <h6>{title}</h6>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Box;
