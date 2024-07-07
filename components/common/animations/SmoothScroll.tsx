"use client";

import React, { use } from "react";
import { ReactLenis } from "lenis/react";
import useWindowSize from "../../../hooks/use-WindowSize";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: (size.width ?? 768) > 768 ? 1.8 : 0,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
