"use client";

import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

import classes from "../../ui/GetInTouchBox.module.scss";

const CirclesAnimation = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [offsets, setOffsets] = useState<{ [key: string]: { x: number; y: number } }>({
    circle1: { x: 0, y: 0 },
    circle2: { x: 0, y: 0 },
    circle3: { x: 0, y: 0 },
    circle4: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const calcOffset = (multiplier: number) => ({
      x: (mousePosition.x - window.innerWidth / 2) * multiplier,
      y: (mousePosition.y - window.innerHeight / 2) * multiplier,
    });

    setOffsets({
      circle1: calcOffset(0.4),
      circle2: calcOffset(0.3),
      circle3: calcOffset(0.2),
      circle4: calcOffset(0.1),
    });
  }, [mousePosition]);
  return (
    <>
      <m.div
        className={classes.circle1}
        style={{ transform: `translate(${offsets.circle1.x}px, ${offsets.circle1.y}px)` }}
      />
      <m.div
        className={classes.circle2}
        style={{ transform: `translate(${offsets.circle2.x}px, ${offsets.circle2.y}px)` }}
      />
      <m.div
        className={classes.circle3}
        style={{ transform: `translate(${offsets.circle3.x}px, ${offsets.circle3.y}px)` }}
      />
      <m.div
        className={classes.circle4}
        style={{ transform: `translate(${offsets.circle4.x}px, ${offsets.circle4.y}px)` }}
      />
    </>
  );
};

export default CirclesAnimation;
