import Image from "next/image";
import React from "react";
import Container from "./container";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Benefits(props) {
  const { data } = props;

  return (
    <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex flex-wrap items-center w-full  ${
          props.imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div className="flex flex-col lg:items-center w-full mt-4">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
            {data.title}
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
            {data.desc}
          </p>
        </div>
        <div className="w-full mt-5 flex flex-col lg:gap-4 lg:flex-row lg:justify-between ">
          {data.bullets.map((item, index) => (
            <Benefit key={index} title={item.title} icon={item.icon}>
              {item.desc}
            </Benefit>
          ))}
        </div>
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
function Benefit(props) {
  return (
    <Section>
      <div className="flex items-start  shadow-md   px-4 py-2  rounded-md mt-8 space-x-3">
        <div className="h-24  flex items-center justify-center">
          <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-600 rounded-md w-11 h-11 ">
            {React.cloneElement(props.icon, {
              className: "w-7 h-11 text-indigo-50",
            })}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 ">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 ">
            {props.children}
          </p>
        </div>
      </div>
    </Section>
  );
}
