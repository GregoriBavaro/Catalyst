import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Providers from "./providers";

import "./styles/main.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Catalyst",
  description:
    "Catalyst delivers innovative software development and marketing solutions tailored to your business needs. Our expert team specializes in custom software development, digital marketing strategies, and data-driven solutions to drive growth and success. Partner with us to transform your business and stay ahead in the digital landscape.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={roboto.className}>
        <Navigation />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
