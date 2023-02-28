import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/farm1.jpg";

export default function Hero() {
  return (
    <Container className="flex flex-wrap ">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Талбайгаас танай гал тогоонд
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Өглөө бүр шинэ ногоо таны гал тогоонд хүргэж өгөх болно
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-full "
            >
              Яг одоо захиалах
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div clasName=" rounded-l-2xl rounded-t-lg rounded-r-xl">
          <Image
            className="rounded-tr-[40%] rounded-b-[40%] rounded-tl-3xl"
            height={400}
            width={300}
            src={heroImg}
            alt="hero"
          />
        </div>
      </div>
    </Container>
  );
}
