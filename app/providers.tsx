"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import SmoothScroll from "../components/common/animations/smoothScrollAnimation/SmoothScroll";
import { useSplashScreen } from "../store/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { isActive } = useSplashScreen();

  if (isActive) {
    return null;
  }

  return (
    <SmoothScroll>
      <div className="pageWrapper">{children}</div>
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
