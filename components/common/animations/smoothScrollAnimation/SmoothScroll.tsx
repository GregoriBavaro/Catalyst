"use client";

import React, { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { useParallaxScroll } from "../../../../store/store";

import useWindowSize from "../../../../hooks/use-WindowSize";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();
  const { isParallaxScroll } = useParallaxScroll();
  const [scrollSpeed, setScrollSpeed] = useState<number>(1.5);

  const isWideScreen = (size.width ?? 1024) > 1024;

  useEffect(() => {
    if (isWideScreen) {
      setScrollSpeed(isParallaxScroll ? 1.2 : 6);
    } else {
      setScrollSpeed(0);
    }
  }, [size.width, isParallaxScroll, isWideScreen]);

  return (
    <ReactLenis
      root
      options={{
        lerp: isWideScreen ? 0.1 : 0,
        duration: scrollSpeed,
        smoothWheel: isWideScreen,
        syncTouch: isWideScreen,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
