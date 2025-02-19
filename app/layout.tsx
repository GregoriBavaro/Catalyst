import React from "react";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Roboto } from "next/font/google";

import Navigation from "../components/layout/navigation/Navigation";
import Footer from "../components/layout/footer/Footer";
import Providers from "./providers";
import SplashScreen from "../components/common/animations/splashScreenAnimation/SplashScreen";

import { structuredData } from "../db/structuredData/structuredData";

import "./styles/main.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Catalyst",
  description:
    "Catalyst delivers innovative software development and marketing solutions tailored to your business needs. Our expert team specializes in custom software development, digital marketing strategies, and data-driven solutions to drive growth and success. Partner with us to transform your business and stay ahead in the digital landscape.",
  openGraph: {
    images: ["https://catalyst.mk/logo/logo.png"],
  },
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
        <meta name="theme-color" content="rgb(1, 19, 31)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Catalyst" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={roboto.className}>
        <ToastContainer />
        <SplashScreen />
        <Navigation />
        <main>
          <Providers>{children}</Providers>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
