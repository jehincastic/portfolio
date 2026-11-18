import "../styles/globals.css";
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import posthog from "posthog-js"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import seoConfig from "../config/seo";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

if (typeof window !== "undefined") {
  if (token && host) {
    posthog.init(token, {
      api_host: host,
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
    })
  } else if (process.env.NODE_ENV === "development") {
    const missingVariable = token
      ? "NEXT_PUBLIC_POSTHOG_HOST"
      : "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN"

    throw new Error(`${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`)
  }
}

const MyApp = ({ Component, pageProps, router }) => {
  const url = `${process.env.BASE_URL}${router.route}`;
  const {
    openGraph,
    titleTemplate,
  } = seoConfig(url);
  
  useEffect(() => {
    if (
      localStorage.theme === "dark"
      || (
        !("theme" in localStorage)
        && window.matchMedia("(prefers-color-scheme: dark)").matches
      )
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  });

  return (
    <ErrorBoundary>
      <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <DefaultSeo
        titleTemplate={titleTemplate}
        openGraph={openGraph}
        canonical={url}
      />
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
      <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
      </>
    </ErrorBoundary>
  );
};

export default MyApp;
