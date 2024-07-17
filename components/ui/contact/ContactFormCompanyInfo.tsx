import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniEnvelope } from "react-icons/hi2";

import classes from "./ContactFormCompanyInfo.module.scss";

const ContactFormCompanyInfo = () => {
  return (
    <div className={classes.companyInfo}>
      <div className={classes.contactInfoItems}>
        <h1>Contact information</h1>
        <p>
          We&apos;re here to help! Contact us with any questions about our marketing and web
          development services. Our team is ready to assist you.
        </p>
      </div>
      <ul>
        <li>
          <FaPhoneAlt style={{ fontSize: "1.3rem" }} />
          <span>+389 70337508</span>
        </li>
        <li>
          <HiMiniEnvelope style={{ fontSize: "1.5rem" }} />
          <span>catalyst.ltd@proton.me</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactFormCompanyInfo;
