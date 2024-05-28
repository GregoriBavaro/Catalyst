import HamburgerMenu from "../ui/HamburgerMenu";
import Logo from "./Logo";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <Logo />
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Navigation;
