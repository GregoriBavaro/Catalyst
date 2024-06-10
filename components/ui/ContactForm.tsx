"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, ToastOptions, Slide } from "react-toastify";
import useEmblaCarousel from "embla-carousel-react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { motion as m } from "framer-motion";
import { ToggleButton, usePrevNextButtons } from "../../hooks/use-PrevNextButtons";

import ContactFormInfo from "./ContactFormFields";
import ContactFormServices from "./ContactFormServices";
import ContactFormCompanyInfo from "./ContactFormCompanyInfo";
import Loading from "../common/Loading";

import classes from "./ContactForm.module.scss";
import "react-toastify/dist/ReactToastify.css";

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

  const tostConfig: ToastOptions = {
    transition: Slide,
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    const preferencesObjects = values.preferences.map((preference) => ({ name: preference }));

    emailjs
      .send(
        "service_7258vua",
        "template_j42t50w",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          preferences: preferencesObjects,
        },
        "D7JVJyPhITgUHk0mk"
      )
      .then(
        () => {
          toast.success("Message successfully submitted", tostConfig);
        },
        () => {
          toast.error("Failed to send message", tostConfig);
        }
      )
      .finally(() => {
        setSubmitting(false);
        resetForm();
        setChecked(Object.fromEntries(SERVICES.map(({ id }) => [id, false])));
      });
  };

  const loadingStyles = {
    flex: 2,
    padding: "0 2rem",
  };

  return (
    <>
      <ToastContainer />
      <div className={classes.formContainer}>
        <ContactFormCompanyInfo />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, setFieldValue, values }) =>
            isSubmitting ? (
              <Loading styles={loadingStyles} isLoading={isSubmitting} />
            ) : (
              <Form className={classes.form}>
                <m.div
                  animate={{ opacity: isSubmitting ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="embla"
                  ref={emblaRef}
                >
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
                </m.div>
              </Form>
            )
          }
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
