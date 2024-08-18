"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastOptions, Slide } from "react-toastify";
import useEmblaCarousel from "embla-carousel-react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToggleButton, usePrevNextButtons } from "../../../hooks/use-PrevNextButtons";

import ContactFormInfo from "./ContactFormFields";
import ContactFormServices from "./ContactFormServices";
import ContactFormCompanyInfo from "./ContactFormCompanyInfo";
import Loading from "../../common/loading/Loading";

import classes from "./ContactForm.module.scss";
import "react-toastify/dist/ReactToastify.css";

import { SERVICES } from "../../../db/services/services";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferences: string[];
}

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

const ContactForm = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [checked, setChecked] = useState<{ [id: number]: boolean }>(
    Object.fromEntries(SERVICES.map(({ id }) => [id, false]))
  );

  const { buttonLabel, onButtonClick } = usePrevNextButtons(emblaApi);

  const toastConfig: ToastOptions = {
    transition: Slide,
  };

  const EMAIL_JS_SERVICE = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE;
  const EMAIL_JS_TEMPLATE = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE;
  const EMAIL_JS_PUBLIC_PASS = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_PASS;

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    if (!EMAIL_JS_SERVICE || !EMAIL_JS_TEMPLATE || !EMAIL_JS_PUBLIC_PASS) {
      toast.error(
        "Email service is not configured properly. Please contact us to fix the problem",
        toastConfig
      );
      setSubmitting(false);
      return;
    }

    const preferencesObjects = values.preferences.map((preference) => ({ name: preference }));

    emailjs
      .send(
        EMAIL_JS_SERVICE,
        EMAIL_JS_TEMPLATE,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          preferences: preferencesObjects,
        },
        EMAIL_JS_PUBLIC_PASS
      )
      .then(
        () => {
          toast.success("Message successfully submitted", toastConfig);
        },
        () => {
          toast.error("Failed to send message", toastConfig);
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
    <section className={classes.contactForm}>
      <div className={classes.contactFormWrapper}>
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
                    {isSubmitting ? (
                      <Loading styles={loadingStyles} isLoading={isSubmitting} />
                    ) : (
                      <ContactFormInfo isSubmitting={isSubmitting} />
                    )}
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
    </section>
  );
};

export default ContactForm;
