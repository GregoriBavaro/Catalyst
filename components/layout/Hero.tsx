"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Button from "../common/Button";

import classes from "./Hero.module.scss";

import growth from "../../public/images/media/growth1.png";

const Hero: React.FC = () => {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };

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
          <Button label="contact" type="button" onClick={() => handleRoute("contact")} />
        </div>
        <div className={classes.pictureContainer}>
          <Image src={growth} alt="growth" priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
