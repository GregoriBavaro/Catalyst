"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaPlus } from "react-icons/fa";
import { DotButton, useDotButton } from "../../../hooks/use-EmblaCarouselDotButton";

import AnimatedNumbers from "../animations/NumberAnimation";

import classes from "./InfoBox.module.scss";

interface Item {
  title: number;
  text: string;
  id: number;
}

const items: Item[] = [
  { id: 0, title: 99, text: "High client retention rate." },
  { id: 1, title: 90, text: "Of clients extend their partnerships." },
  { id: 2, title: 99, text: "Customer satisfaction rate." },
];

const InfoBox: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className={classes.infoBox}>
      <div className={`embla ${classes.infoBoxWrapper}`} ref={emblaRef}>
        <div className={`embla__container ${classes.infoBoxContainer}`}>
          {items.map(({ title, id, text }) => (
            <div key={id} className={`embla__slide ${classes.infoBoxSlide}`}>
              <div>
                <p>
                  <AnimatedNumbers value={title} duration={155} />%
                </p>
                <FaPlus />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className={`infoBox_embla__controls ${classes.infoBoxControls}`}>
          <div className="infoBox_embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={scrollSnaps[index]}
                onClick={() => onDotButtonClick(index)}
                className={"infoBox_embla__dot".concat(
                  index === selectedIndex ? " infoBox_embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBox;
