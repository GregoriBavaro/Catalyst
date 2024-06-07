"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToggleButton, usePrevNextButtons } from "../../hooks/use-PrevNextButtons";

import ContactFormInfo from "./ContactFormFields";
import ContactFormServices from "./ContactFormServices";
import ContactFormCompanyInfo from "./ContactFormCompanyInfo";

import classes from "./ContactForm.module.scss";

import { SERVICES } from "../../db/services";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferences: string[];
}

const ContactForm = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [checked, setChecked] = useState<{ [id: number]: boolean }>(
    Object.fromEntries(SERVICES.map(({ id }) => [id, false]))
  );

  const { buttonLabel, onButtonClick } = usePrevNextButtons(emblaApi);

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
    resetForm();
    setChecked(Object.fromEntries(SERVICES.map(({ id }) => [id, false])));
  };

  return (
    <div className={classes.formContainer}>
      <ContactFormCompanyInfo />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className={classes.form}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <ContactFormServices
                    values={values}
                    setFieldValue={setFieldValue}
                    checked={checked}
                    setChecked={setChecked}
                  />
                </div>
                <div className="embla__slide">
                  <ContactFormInfo isSubmitting={isSubmitting} />
                </div>
              </div>
              <div className="embla__controls">
                <div className="embla__buttons">
                  <ToggleButton label={buttonLabel} onClick={onButtonClick} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
