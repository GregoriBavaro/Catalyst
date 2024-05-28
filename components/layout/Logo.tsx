"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useHamburgerMenu } from "../../store/store";

import classes from "./Logo.module.scss";

import logo from "../../public/images/logo/catalyst-logo-two.png";

const Logo = () => {
  const { isOpen, setOpen } = useHamburgerMenu();
  const router = useRouter();

  const handleRoute = () => {
    router.push("/");
    if (isOpen) {
      setOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <div
      className={classes.logo}
      onClick={handleRoute}
      onKeyDown={(e) => handleKeyDown(e)}
      role="button"
      tabIndex={0}
    >
      <Image src={logo} alt="catalyst logo" />
    </div>
  );
};

export default Logo;
