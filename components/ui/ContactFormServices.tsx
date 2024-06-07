import { Dispatch, SetStateAction } from "react";
import { Field, FormikErrors } from "formik";
import { motion as m } from "framer-motion";

import classes from "./ContactFormServices.module.scss";

import { SERVICES } from "../../db/services";

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
      initial: { scale: 1 },
      animate: {
        background: checked[id] ? "rgba(255, 255, 255, 0.068)" : "rgba(255, 255, 255, 0)",
      },
      whileTap: { scale: 0.98 },
    };
  };
  return (
    <div className={classes.checkboxes}>
      <div>
        <h5>Service you are interested in</h5>
        <p>(select one or more)</p>
      </div>
      <ul className={classes.list}>
        {SERVICES.map(({ id, title }) => (
          <m.li
            key={id}
            {...listsAnimation(id)}
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
          </m.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactFormServices;
