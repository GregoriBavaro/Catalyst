"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import useWindowSize from "../../../../hooks/use-WindowSize";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();

  const mobileAndTablet = (size.width ?? 1024) > 1024;

  return (
    <ReactLenis
      root
      options={{
        lerp: mobileAndTablet ? 0.1 : 0,
        duration: mobileAndTablet ? 1.5 : 0,
        smoothWheel: mobileAndTablet,
        syncTouch: mobileAndTablet,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
