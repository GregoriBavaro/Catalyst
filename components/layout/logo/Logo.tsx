"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useHamburgerMenu } from "../../../store/store";

import classes from "./Logo.module.scss";

import logo from "../../../public/images/logo/catalyst-logo-two.png";

const Logo = () => {
  const { isOpen, setOpen } = useHamburgerMenu();
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = () => {
    if (pathname === "/") {
      return;
    }
    if (isOpen) {
      setOpen(false);
    }
    router.push("/");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (pathname === "/") {
      return;
    }
    if (e.key === "Enter") {
      setOpen(false);
      router.push("/");
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
      <Image src={logo} alt="catalyst logo" priority />
    </div>
  );
};

export default Logo;
