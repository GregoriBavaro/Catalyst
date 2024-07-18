import Image from "next/image";
import Button from "../../common/buttons/Button";
import InfoBox from "../../common/infoBox/InfoBox";
import LinkAnimation from "../../common/animations/linkAnimation/linkAnimation";

import classes from "./Hero.module.scss";

import growth from "../../../public/images/media/growth1.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.promo}>
        <div className={classes.textContainer}>
          <h1>
            Elevating Your Online <span style={{ color: "var(--bright-aqua)" }}>Influence</span>,
            Pixel by Pixel
          </h1>
          <p>
            Welcome to our digital playground, where creativity meets strategy. Our team of experts
            crafts immersive web experiences tailored to your brand, while our cutting-edge
            marketing solutions ensure your message resonates far and wide. Lets elevate your online
            presence together.
          </p>
          <LinkAnimation href="/contact">
            <Button label="contact" type="button" />
          </LinkAnimation>
        </div>
        <div className={classes.pictureContainer}>
          <Image src={growth} alt="growth" priority />
        </div>
      </div>
      <InfoBox />
    </section>
  );
};

export default Hero;
