import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import ContactForm from "../../components/ui/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Catalyst to discuss your business needs. Use our contact form to reach out to our expert team for inquiries, collaborations, or to schedule a consultation. We're here to help you achieve your goals and grow your business through innovative solutions and personalized service.",
};

const Contact = () => {
  return (
    <>
      <PageHeader header="Lets connect!" />
      <ContactForm />
    </>
  );
};

export default Contact;
