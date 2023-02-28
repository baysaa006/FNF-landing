import React from "react";
import Container from "./container";

function Pricing() {
  return (
    <Container>
      <div id="price" className="flex  items-center w-full  ">
        <div className="flex flex-col  lg:items-center w-full mt-4">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
            Үнийн санал
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl "></p>
        </div>
      </div>
    </Container>
  );
}

export default Pricing;
