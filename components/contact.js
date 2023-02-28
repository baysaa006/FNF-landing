import React from "react";
import Container from "./container";

function Contact(props) {
  const { data } = props;

  return (
    <Container>
      <div className="flex  items-center w-full ">
        <div className="flex flex-col  lg:items-center w-full mt-4">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Холбоо барих
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"></p>
        </div>
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
function Contacts(props) {
  return (
    <>
      <div className="flex items-start  shadow-md   px-4 py-2  rounded-md mt-8 space-x-3">
        <div className="h-24  flex items-center justify-center">
          <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-600 rounded-md w-11 h-11 ">
            {React.cloneElement(props.icon, {
              className: "w-7 h-11 text-indigo-50",
            })}
          </div>
        </div>
        <div className="h-24   flex flex-col items-start justify-center">
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
export default Contact;
