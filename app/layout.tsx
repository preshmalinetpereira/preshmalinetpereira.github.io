import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./font/font";
import { gitlabmono } from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";
import { API_ENDPOINT } from "@/lib/env.api";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

// #TODO

const options = {
  title: "Preshma Linet Pereira | Data Scientist & Software Developer",
  description: "A seasoned professional with 2 degrees in computer science and 5+ years of experience developing computer programs",
  url: API_ENDPOINT ,
  ogImage:
    "",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "preshmalinetpereira.github.io",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  // other: {
  //   "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
