"use client";

import { motion as m } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import Button from "../common/Button";

import classes from "./PhotoPresentation.module.scss";

interface PhotoPresentationProps {
  image: StaticImageData;
  buttonLabel: string;
  routeTo: string;
  header: string;
  subHeader: string;
  description: string;
}

const listAnimation = (delayTime: number, setOpacity: number) => {
  return {
    initial: { opacity: 0, transform: "translateY(120%)" },
    animate: { opacity: setOpacity, transform: "translateY(0%)" },
    transition: { duration: 0.3, delay: delayTime, bounce: 0 },
  };
};

const PhotoPresentation = ({
  image,
  buttonLabel,
  routeTo,
  header,
  subHeader,
  description,
}: PhotoPresentationProps) => {
  return (
    <div className={classes.photoPresentation}>
      <div className={classes.photoPresentationImgWrapper}>
        <Image src={image} alt="presentation-image" priority />
      </div>
      <div className={classes.photoPresentationTextWrapper}>
        <div className="subHeadingWrapper">
          <span className="subHeadingSquare" />
          <h6>{subHeader}</h6>
        </div>
        <h4>{header}</h4>
        <div>
          <m.p {...listAnimation(0.4, 0.5)}>{description}</m.p>
        </div>
        <Button label={buttonLabel} routeTo={routeTo} />
      </div>
    </div>
  );
};

export default PhotoPresentation;
