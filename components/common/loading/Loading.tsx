"use client";

import { motion as m } from "framer-motion";
import { CSSProperties } from "react";
import Lottie from "lottie-react";

import classes from "./Loading.module.scss";

import loading from "../../../public/animations/loading.json";

interface LoadingProps {
  styles?: CSSProperties;
  isLoading?: boolean;
}

const Loading = ({ styles, isLoading }: LoadingProps) => {
  const loadingAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 0 },
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  };

  return (
    <m.div {...loadingAnimation} className={classes.loading} style={{ ...styles }}>
      <Lottie animationData={loading} />
    </m.div>
  );
};

export default Loading;
