import HamburgerMenu from "../ui/HamburgerMenu";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.logo}>Logo</div>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Navigation;
