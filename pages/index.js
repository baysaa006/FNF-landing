import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>F&F</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <Footer />
      <PopupWidget />
    </>
  );
}
