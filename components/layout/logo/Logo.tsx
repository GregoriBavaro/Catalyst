import React from "react";
import Image from "next/image";

import LinkAnimation from "../../common/animations/linkAnimation/linkAnimation";

import classes from "./Logo.module.scss";

import logo from "../../../public/images/logo/catalyst-logo-two.png";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <LinkAnimation href="/">
        <Image src={logo} alt="catalyst logo" priority />
      </LinkAnimation>
    </div>
  );
};

export default Logo;
