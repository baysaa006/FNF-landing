import React from "react";
import Container from "./container";
import { useInView } from "framer-motion";
import { useRef } from "react";
function Contact(props) {
  const { data } = props;

  return (
    <Container>
      <div id="contact" className="flex  items-center w-full ">
        <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
          Холбоо барих
        </h3>
      </div>
      <div className="w-full flex flex-col lg:gap-4 lg:flex-row lg:justify-between ">
        {data.contact.map((item, index) => (
          <Contacts key={index} title={item.title} icon={item.icon}>
            {item.desc}
          </Contacts>
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
function Contacts(props) {
  return (
    <Section>
      <div className="flex items-start  space-x-3">
        <div className="h-24  flex items-center justify-center">
          <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-600 rounded-md w-12 h-12 ">
            {React.cloneElement(props.icon, {
              className: "h-12 w-7  text-indigo-50",
            })}
          </div>
        </div>
        <div className="h-24  flex flex-col items-start justify-center">
          <h4 className="text-xl font-medium text-gray-800 ">{props.title}</h4>
          <p className="mt-1 text-gray-500 ">{props.children}</p>
        </div>
      </div>
    </Section>
  );
}
export default Contact;
