import { ErrorMessage, Field } from "formik";
import Button from "../../common/buttons/Button";

import classes from "./ContactFormFields.module.scss";

const ContactFormInfo = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <div className={classes.info}>
      <h1>Your personal information</h1>
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
      <Button type="submit" label="Submit" disabled={isSubmitting} />
    </div>
  );
};

export default ContactFormInfo;
