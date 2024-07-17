import type { Metadata } from "next";

import PageHeader from "../../components/layout/pageHeader/PageHeader";
import ContactForm from "../../components/ui/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Catalyst",
  description:
    "Reach out to Catalyst for inquiries, collaborations, or consultations. Use our contact form to connect with our expert team and grow your business through innovative solutions and personalized service.",
};

const Contact = () => {
  return (
    <>
      <PageHeader header="Lets connect" />
      <ContactForm />
    </>
  );
};

export default Contact;
