import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { benefitOne, products, contacts } from "../components/data";
import Benefits from "../components/benefits";
import Products from "../components/products";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Contact from "../components/contact";
import styles from "../css/style.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>F&F Catering LLC</title>
        <meta name="description" content="" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        <span className={styles.star}></span>
        <Benefits data={benefitOne} />
      </div>
      <div className="relative ">
        <span className={styles.star}></span>
        <Products data={products} />
      </div>

      <div className="relative">
        <span className={styles.star}></span>
        <Pricing />
      </div>
      <div className="relative">
        <span className={styles.star}></span>
        <Contact data={contacts} />
      </div>
      <Footer />
    </>
  );
}
