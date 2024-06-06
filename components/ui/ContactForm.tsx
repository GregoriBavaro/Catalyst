"use client";

import { useState } from "react";
import { Formik, Form, FormikHelpers, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { motion as m } from "framer-motion";

import Button from "../common/Button";

import classes from "./ContactForm.module.scss";

import { SERVICES } from "../../db/services";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferences: string[]; // Change type to hold selected service titles
}

const ContactForm = () => {
  const [checked, setChecked] = useState<{ [id: number]: boolean }>(
    Object.fromEntries(SERVICES.map(({ id }) => [id, false]))
  );

  const listsAnimation = (id: number) => {
    return {
      initial: { scale: 1 },
      animate: {
        background: checked[id] ? "rgba(255, 255, 255, 0.068)" : "rgba(255, 255, 255, 0)",
      },
      whileTap: { scale: 0.98 },
    };
  };

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferences: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email address"),
    phone: Yup.string(),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(false);
    console.log(values);
    resetForm();
    setChecked(Object.fromEntries(SERVICES.map(({ id }) => [id, false])));
  };

  const handleCheckboxChange = (id: number) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={classes.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className={classes.form}>
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
            <div className={classes.info}>
              <h5>Your personal information</h5>
              <div className={classes.duo}>
                <div className={classes.field}>
                  <Field name="name" placeholder="Name" />
                  <div className={classes.error}>
                    <ErrorMessage name="name" component="span" />
                  </div>
                </div>
                <div className={classes.field}>
                  <Field name="email" placeholder="Email" />
                  <div className={classes.error}>
                    <ErrorMessage name="email" component="span" />
                  </div>
                </div>
              </div>
              <div className={classes.field}>
                <Field name="phone" placeholder="Phone" />
                <div className={classes.error}>
                  <ErrorMessage name="phone" component="span" />
                </div>
              </div>
              <div className={classes.field}>
                <Field name="subject" placeholder="Subject" />
                <div className={classes.error}>
                  <ErrorMessage name="subject" component="span" />
                </div>
              </div>
              <div className={classes.field}>
                <Field name="message" as="textarea" placeholder="Brief insights into the project" />
                <div className={classes.error}>
                  <ErrorMessage name="message" component="span" />
                </div>
              </div>
              <Button type="submit" routeTo="noRoute" label="Submit" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
