"use client";

import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

import Button from "../../common/buttons/Button";
import LinkAnimation from "../../common/animations/linkAnimation/linkAnimation";

import classes from "./PageIntro.module.scss";

interface PageIntroProps {
  buttonLabel: string;
  routeTo: string;
  header: string;
  subHeader: string;
  description: string;
  wrapperStyle?: {};
  children: React.ReactNode;
}

const listAnimation = (delayTime: number, setOpacity: number) => {
  return {
    initial: { opacity: 0, transform: "translateY(120%)" },
    animate: { opacity: setOpacity, transform: "translateY(0%)" },
    transition: { duration: 0.3, delay: delayTime, bounce: 0, ease: [0.65, 0, 0.35, 1] },
  };
};

const PageIntro = ({
  buttonLabel,
  header,
  subHeader,
  description,
  wrapperStyle,
  children,
}: PageIntroProps) => {
  return (
    <section className={classes.pageIntro}>
      <div className={classes.pageIntroWrapper} style={{ ...wrapperStyle }}>
        {children}
        <div className={classes.pageIntroTextWrapper}>
          <div className="subHeadingWrapper">
            <span className="subHeadingSquare" />
            <h2>{subHeader}</h2>
          </div>
          <h1>{header}</h1>
          <div>
            <m.p {...listAnimation(0.4, 0.5)}>{description}</m.p>
          </div>
          <LinkAnimation href="/contact">
            <Button label={buttonLabel} />
          </LinkAnimation>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
