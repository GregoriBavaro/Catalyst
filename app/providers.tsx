"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="var(--bright-aqua)"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
