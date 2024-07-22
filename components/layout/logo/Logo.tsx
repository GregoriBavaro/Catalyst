import React from "react";
import Image from "next/image";

import PageTransition from "../../common/animations/pageTransitionAnimation/pageTransitionAnimation";

import classes from "./Logo.module.scss";

import logo from "../../../public/images/logo/catalyst-logo-two.png";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <PageTransition href="/">
        <Image src={logo} alt="catalyst logo" priority />
      </PageTransition>
    </div>
  );
};

export default Logo;
