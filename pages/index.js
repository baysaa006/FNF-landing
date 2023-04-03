import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import {
  benefitOne,
  products,
  contacts,
  benefitOne1,
} from "../components/data";
import About from "../components/about";
import About1 from "../components/avout";
import Products from "../components/products";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Contact from "../components/contact";
import styles from "../css/style.module.css";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Section(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="relative" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {props.children}
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Head>
        <title>F&F Catering LLC</title>
        <meta name="description" content="" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <Navbar />
      <Section>
        <Hero />
      </Section>
      <Section>
        <About data={benefitOne} />
      </Section>
      <Section>
        <About1 data={benefitOne1} />
      </Section>

      <Section>
        <Products data={products} />
      </Section>
      <Section>
        <Contact data={contacts} />
      </Section>
      <Footer />
    </>
  );
}
