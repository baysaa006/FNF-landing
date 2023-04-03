import Image from "next/image";
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Slider from "./image_slider";
import Container from "./container";

export default function About(props) {
  const { data } = props;

  return (
    <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap ">
      <div
        id="about"
        className={`flex flex-wrap items-center w-full  ${
          props.imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <h3 className=" mb-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
          {data.title}
        </h3>
        <div className=" mb-4 md:items-start justify-start xl:items-center w-full mt-4">
          <p className=" w-full xl:items-center text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl  ">
            {data.desc}
          </p>
        </div>
        <Slider />
        <div className="w-full mt-5 gap-4 flex flex-col lg:gap-4 lg:flex-row lg:justify-between ">
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
      <div className="flex items-start   rounded-md space-x-3">
        <div className="h-24  flex items-center justify-center">
          <div className="flex items-center justify-center flex-shrink-0  bg-green-600 rounded-md w-24 h-24 ">
            {React.cloneElement(props.icon, {
              className: "w-12  text-indigo-50",
            })}
          </div>
        </div>
        <div className="flex h-24 flex-col justify-around">
          <h4 className="text-xl font-medium text-gray-800 ">{props.title}</h4>
          <p className=" text-gray-500 ">{props.children}</p>
        </div>
      </div>
    </Section>
  );
}
