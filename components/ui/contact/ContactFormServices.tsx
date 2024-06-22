import { Dispatch, SetStateAction } from "react";
import { Field, FormikErrors } from "formik";
import { motion as m } from "framer-motion";
import { serviceCards } from "../../../config/animations";

import classes from "./ContactFormServices.module.scss";

import { SERVICES } from "../../../db/services/services";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferences: string[];
}

interface ContactFormServiceProps {
  checked: { [id: number]: boolean };
  setChecked: Dispatch<
    SetStateAction<{
      [id: number]: boolean;
    }>
  >;
  values: FormValues;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<FormValues>>;
}

const ContactFormServices = ({
  checked,
  setChecked,
  values,
  setFieldValue,
}: ContactFormServiceProps) => {
  const handleCheckboxChange = (id: number) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const listsAnimation = (id: number, animationDelay: number) => {
    return {
      initial: { scale: 1, y: "5rem", opacity: 0 },
      animate: {
        background: checked[id] ? "rgba(255, 255, 255, 0.068)" : "rgb(8, 39, 65)",
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 0.55,
        delay: animationDelay,
        ease: "easeIn",
        scale: { delay: 0 },
        background: { delay: 0, duration: 0 },
      },
      whileTap: { scale: 0.98 },
    };
  };

  const {
    webDevDesign,
    performanceOptimization,
    seo,
    marketing,
    socialMedia,
    brandIdentity,
    socialMediaAutomation,
  } = serviceCards();
  const cardsConfig = [
    webDevDesign,
    performanceOptimization,
    seo,
    marketing,
    socialMedia,
    brandIdentity,
    socialMediaAutomation,
  ];

  return (
    <div className={classes.checkboxes}>
      <div>
        <h5>Service you are interested in</h5>
        <p>(select one or more)</p>
      </div>
      <div className={classes.listWrapper}>
        <ul className={classes.list}>
          {SERVICES.map(({ id, title }) => {
            const { animationDelayContact } = cardsConfig[id];

            return (
              <li key={id}>
                <m.div
                  {...listsAnimation(id, animationDelayContact)}
                  className={classes.lists}
                  onClick={() => {
                    handleCheckboxChange(id);
                    const updatedPreferences = checked[id]
                      ? values.preferences.filter((pref) => pref !== title)
                      : [...values.preferences, title];
                    setFieldValue("preferences", updatedPreferences);
                  }}
                >
                  <Field type="checkbox" name="preferences" value={title} checked={checked[id]} />
                  <span>{title}</span>
                </m.div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactFormServices;
