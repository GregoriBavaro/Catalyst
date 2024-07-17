import { Dispatch, SetStateAction } from "react";
import { Field, FormikErrors } from "formik";
import { motion as m } from "framer-motion";

import SlideUpItems from "../../common/animations/slideUpAnimation/SlideUpItems";
import SlideUpList from "../../common/animations/slideUpAnimation/SlideUpList";

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

  const listsAnimation = (id: number) => {
    return {
      initial: { scale: 1, opacity: 0 },
      animate: {
        background: checked[id] ? "rgba(255, 255, 255, 0.068)" : "rgb(8, 39, 65)",
        opacity: 1,
      },
      transition: {
        duration: 0.55,
        ease: [0.65, 0, 0.35, 1],
        scale: { delay: 0 },
        background: { delay: 0, duration: 0 },
      },
      whileTap: { scale: 0.98 },
    };
  };

  return (
    <div className={classes.checkboxes}>
      <div>
        <h1>Service you are interested in</h1>
        <p>(select one or more)</p>
      </div>
      <div className={classes.listWrapper}>
        <SlideUpList showAllCards listClass={classes.listWrapper__list}>
          {SERVICES.map(({ id, title }) => {
            return (
              <SlideUpItems key={id} itemClass={classes.listWrapper__item} id={0}>
                <m.div
                  {...listsAnimation(id)}
                  className={classes.listWrapper__checkbox}
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
              </SlideUpItems>
            );
          })}
        </SlideUpList>
      </div>
    </div>
  );
};

export default ContactFormServices;
