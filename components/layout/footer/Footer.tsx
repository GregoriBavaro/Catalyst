import Image from "next/image";
import Link from "next/link";

import { FaRegCopyright } from "react-icons/fa6";

import Slider from "../../common/marquee/Marquee";
import FooterList from "./FooterList";

import logo from "../../../public/images/logo/catalyst-logo-two.png";

import classes from "./Footer.module.scss";

import { FOOTER_DATA } from "../../../db/footer";
import { SOCIAL } from "../../../db/social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={classes.footer}>
      <Slider text={"Let's connect"} repeatTimes={50} className={classes.footerMarquee} />
      <div className={classes.footerWrapper}>
        <div className={classes.logoListWrapper}>
          <div className={classes.footerLogo}>
            <div>
              <Image src={logo} alt="logo" priority />
            </div>
            <p>Empower Your Aspirations</p>
          </div>
          <FooterList />
          <div className={classes.footerPreferences}>
            <span>Preferences</span>
          </div>
        </div>
        <div className={classes.footerYearSocialWrapper}>
          <div className={classes.footerYear}>
            <FaRegCopyright />
            <p>{currentYear} Catalyst ltd.</p>
          </div>
          <ul className={classes.footerSocial}>
            {SOCIAL.map(({ id, icon, link }) => (
              <li key={id}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
