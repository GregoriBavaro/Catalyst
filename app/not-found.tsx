"use client";

import Lottie from "lottie-react";
import { CSSProperties } from "react";

import PageHeader from "../components/layout/pageHeader/PageHeader";

import notFound from "../public/animations/404.json";

const NotFound = () => {
  const notFoundStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    minHeight: "calc(100vh - 267px)",
  };

  return (
    <>
      <PageHeader header="Page not found!" />
      <section style={{ ...notFoundStyles }}>
        <Lottie style={{ width: "50%" }} animationData={notFound} />
      </section>
    </>
  );
};

export default NotFound;
