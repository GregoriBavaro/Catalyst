import Image from "next/image";

import HamburgerMenu from "../ui/HamburgerMenu";

import classes from "./Navigation.module.scss";

import logo from "../../public/images/logo/catalyst-logo-two.png";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.logo}>
          <Image src={logo} alt="catalyst logo" />
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Navigation;
