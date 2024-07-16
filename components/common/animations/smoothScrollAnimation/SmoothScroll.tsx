"use client";

import React, { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { useParallaxScroll } from "../../../../store/store";

import useWindowSize from "../../../../hooks/use-WindowSize";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();
  const { isParallaxScroll } = useParallaxScroll();
  const [scrollSpeed, setScrollSpeed] = useState<number | undefined>();

  const isDesktop = (size.width ?? 1024) > 1024;

  useEffect(() => {
    if (isDesktop) {
      setScrollSpeed(1.3);
      if (isParallaxScroll) {
        setScrollSpeed(6);
      } else {
        setScrollSpeed(1.3);
      }
    } else {
      setScrollSpeed(0);
    }
  }, [size.width, isParallaxScroll, isDesktop]);

  return (
    <ReactLenis
      root
      options={{
        lerp: isDesktop ? 0.1 : 0,
        duration: scrollSpeed,
        smoothWheel: isDesktop,
        syncTouch: isDesktop,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
