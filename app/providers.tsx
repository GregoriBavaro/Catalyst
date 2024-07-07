"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import SmoothScroll from "../components/common/animations/SmoothScroll";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
      {children}
      <ProgressBar
        height="4px"
        color="var(--bright-aqua)"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SmoothScroll>
  );
};

export default Providers;
