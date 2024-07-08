import Link from "next/link";

import Button from "../../common/buttons/Button";
import CirclesAnimation from "../../common/animations/circlesAnimation/CirclesAnimation";

import classes from "./GetInTouchBox.module.scss";

const GetInTouchBox = () => {
  return (
    <section className={classes.mouseAnimation}>
      <div className={classes.mouseAnimationWrapper}>
        <h3>Start building your dream today</h3>
        <p>Get in touch to learn how to elevate your business and take it to the next level</p>
        <Link href="/contact">
          <Button label="Get in touch" />
        </Link>
        <CirclesAnimation />
      </div>
    </section>
  );
};

export default GetInTouchBox;
