import Image from "next/image";
import React from "react";
import Container from "./container";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Products(props) {
  const { data } = props;

  return (
    <Container>
      <div className="flex  items-center w-full ">
        <div className="flex flex-col  lg:items-center w-full mt-4">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
            {data.title}
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
            {data.desc}
          </p>
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col lg:gap-4 lg:flex-row lg:justify-between ">
        {data.product.map((item, index) => (
          <Product key={index} title={item.title} image={item.image}>
            {item.desc}
          </Product>
        ))}
      </div>
    </Container>
  );
}
function Section(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
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
function Product(props) {
  return (
    <Section>
      <div className="flex flex-col px-4 py-2   rounded-lg shadow-md gap-2 items-start mt-6 ">
        <div className="flex items-center justify-center flex-shrink-0   w-full h-24 ">
          <Image src={props.image} width={120} height={120} alt="" />
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 ">{props.title}</h4>
          <p className="mt-1 text-gray-500 ">{props.children}</p>
        </div>
      </div>
    </Section>
  );
}
