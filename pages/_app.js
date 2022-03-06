import "../styles/globals.css";
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "../components/Header";
import Footer from "../components/Footer";


const MyApp = ({ Component, pageProps, router }) => {
  const url = `${process.env.BASE_URL}${router.route}`
  
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
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Castic Jehin"
        openGraph={{
          type: "website",
          locale: "en_IN",
          url,
          description: "The personal website for Castic Jehin, Developer.",
          site_name: `Castic Jehin | ${process.env.DOMAIN}`,
          images: [],
        }}
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
  );
};

export default MyApp;
