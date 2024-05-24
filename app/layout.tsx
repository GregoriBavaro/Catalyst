import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Navigation from "../components/layout/Navigation";

import "./styles/main.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Catalyst",
  description:
    "Catalyst delivers innovative software development and marketing solutions tailored to your business needs. Our expert team specializes in custom software development, digital marketing strategies, and data-driven solutions to drive growth and success. Partner with us to transform your business and stay ahead in the digital landscape.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
