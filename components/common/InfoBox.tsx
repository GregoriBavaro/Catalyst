"use client";

import React from "react";

import { FaPlus } from "react-icons/fa";
import AnimatedNumbers from "./AnimateNumbers";

import classes from "./InfoBox.module.scss";

interface Item {
  title: number;
  text: string;
  id: number;
}

const items: Item[] = [
  { id: 0, title: 99, text: "Customer satisfaction rate." },
  { id: 1, title: 95, text: "Of our team members has 20 + years of experience." },
  { id: 2, title: 90, text: "Of clients extend their partnerships." },
];

const InfoBox: React.FC = () => {
  return (
    <section className={classes.infoBox}>
      <ul>
        {items.map(({ title, id, text }) => (
          <li key={id}>
            <div>
              <p>
                <AnimatedNumbers value={title} duration={155} />%
              </p>
              <FaPlus />
            </div>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoBox;
