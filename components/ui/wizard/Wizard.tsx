import Marquee from "react-fast-marquee";
import Image from "next/image";

import Button from "../../common/buttons/Button";
import PageTransition from "../../common/animations/pageTransitionAnimation/pageTransitionAnimation";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";
import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";

import classes from "./Wizard.module.scss";

import { TOOLS } from "../../../db/promos";

interface WizardProps {
  data: {
    buttonName: string;
    buttonWidth: string;
    heading: string;
    subHeading: string;
    text: string;
    href: string;
  };
}

const Wizard = ({ data }: WizardProps) => {
  return (
    <SlideUpList listClass={classes.wizard} showAllCards>
      <SlideUpItems itemClass={classes.wizard__right}>
        <div className="subHeadingWrapper">
          <span className="subHeadingSquare" />
          <h2>{data.subHeading}</h2>
        </div>
        <h1>{data.heading}</h1>
        <p>{data.text}</p>
        <PageTransition href={data.href}>
          <Button label={data.buttonName} buttonWidth={data.buttonWidth} />
        </PageTransition>
      </SlideUpItems>
      <SlideUpItems itemClass={classes.wizard__left}>
        <Marquee>
          {TOOLS.map(({ id, icon, alt, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.iconWrapper}
            >
              <Image src={icon} alt={alt} />
            </a>
          ))}
        </Marquee>
      </SlideUpItems>
    </SlideUpList>
  );
};

export default Wizard;
