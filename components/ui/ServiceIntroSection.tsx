import { motion as m } from "framer-motion";
import Link from "next/link";
import { StaticImageData } from "next/image";

import Button from "../common/buttons/Button";
import StackingCardsAnimation from "../common/animations/StackingCardsAnimation";

import classes from "./ServiceIntroSection.module.scss";

interface ServiceData {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
  scaleStart: number;
  scaleEnd: number;
  xStart: string;
  xEnd: string;
  yStart: string;
  yEnd: string;
  rotateStart: string;
  rotateEnd: string;
}

interface PhotoPresentationProps {
  buttonLabel: string;
  routeTo: string;
  header: string;
  subHeader: string;
  description: string;
  serviceData: ServiceData[];
}

const listAnimation = (delayTime: number, setOpacity: number) => {
  return {
    initial: { opacity: 0, transform: "translateY(120%)" },
    animate: { opacity: setOpacity, transform: "translateY(0%)" },
    transition: { duration: 0.3, delay: delayTime, bounce: 0 },
  };
};

const PhotoPresentation = ({
  buttonLabel,
  header,
  subHeader,
  description,
  serviceData,
}: PhotoPresentationProps) => {
  return (
    <section className={classes.photoPresentation}>
      <div className={classes.photoPresentationWrapper}>
        <StackingCardsAnimation data={serviceData} />
        <div className={classes.photoPresentationTextWrapper}>
          <div className="subHeadingWrapper">
            <span className="subHeadingSquare" />
            <h6>{subHeader}</h6>
          </div>
          <h4>{header}</h4>
          <div>
            <m.p {...listAnimation(0.4, 0.5)}>{description}</m.p>
          </div>
          <Link href="/contact">
            <Button label={buttonLabel} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoPresentation;
