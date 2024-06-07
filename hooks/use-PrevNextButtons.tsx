import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  buttonLabel: string;
  onButtonClick: () => void;
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("NEXT");

  const onButtonClick = useCallback(() => {
    if (!emblaApi) return;
    if (currentSlide === 0) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, currentSlide]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    const selectedIndex = emblaApi.selectedScrollSnap();
    setCurrentSlide(selectedIndex);
    setButtonLabel(selectedIndex === 0 ? "NEXT" : "BACK");
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    buttonLabel,
    onButtonClick,
  };
};

export const ToggleButton: React.FC<PropType & { label: string; onClick: () => void }> = (
  props
) => {
  const { children, label, onClick, ...restProps } = props;

  return (
    <button className="embla__button" type="button" onClick={onClick} {...restProps}>
      <span>{label}</span>
      {children}
    </button>
  );
};
