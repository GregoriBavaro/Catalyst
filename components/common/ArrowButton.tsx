"use client";

import React from "react";
import { useRouter } from "next/navigation";

import classes from "./ArrowButton.module.scss";

interface LabelProps {
  label: string;
  classNameWrapper?: string;
  classNameIcon?: string;
  routeTo?: string;
}

const ArrowButton = ({ label, classNameWrapper, classNameIcon, routeTo }: LabelProps) => {
  const router = useRouter();

  const handleRoute = (path: string | undefined) => {
    if (!path) {
      return;
    }
    router.push(path);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, path: string | undefined) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRoute(path);
    }
  };

  return (
    <div
      className={`${classes.buttonWrapper} ${classNameWrapper}`}
      onClick={() => handleRoute(routeTo)}
      onKeyDown={(e) => handleKeyDown(e, routeTo)}
      role="button"
      tabIndex={0}
    >
      <span className={`${classes.circle}`} aria-hidden="true">
        <span className={`${classes.icon} ${classNameIcon} ${classes.arrow}`} />
      </span>
      <div className={classes.label}>{label}</div>
    </div>
  );
};

export default ArrowButton;
