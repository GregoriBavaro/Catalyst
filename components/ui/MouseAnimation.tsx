"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

import Button from "../common/Button";

import classes from "./MouseAnimation.module.scss";

const MouseAnimation = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setOffsetX((mousePosition.x - window.innerWidth / 2) * 0.3);
    setOffsetY((mousePosition.y - window.innerHeight / 2) * 0.3);
  }, [mousePosition]);

  return (
    <section className={classes.mouseAnimation}>
      <div className={classes.mouseAnimationWrapper}>
        <h3>Start building your dream today</h3>
        <p>Get in touch to learn how to elevate your business and take it to the next level</p>
        <Link href="/contact">
          <Button label="Get in touch" />
        </Link>
        <m.div
          className={classes.circleContainer}
          style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        >
          <m.div className={classes.circle1} />
          <m.div className={classes.circle2} />
          <m.div className={classes.circle3} />
          <m.div className={classes.circle4} />
        </m.div>
      </div>
    </section>
  );
};

export default MouseAnimation;
