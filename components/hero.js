import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/farm1.jpg";

export default function Hero() {
  return (
    <Container className="flex flex-wrap mt-24 ">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl ">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
            Талбайгаас танай гал тогоонд
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
            Шинэ чанартай ногоо, хүнсийг хэрэглэгч түмэндээ нийлүүлэх.Түгээлтийн
            шинэлэг систем нэвтрүүлэх{" "}
          </p>
        </div>
      </div>
      <div className="flex mb-8  lg:mt-4   relative  items-center justify-center w-full lg:w-1/2">
        <div className=" rounded-l-2xl rounded-t-lg rounded-r-xl">
          <Image
            priority={true}
            className="rounded-tr-[40%] rounded-b-[40%] rounded-tl-3xl"
            height={"auto"}
            width={300}
            src={heroImg}
            alt="hero"
          />
          <div className="-bottom-5  lg:left-[22%] bg-yellow-400  p-2 absolute rounded-full ">
            <h3 className="absolute right-[34%] bottom-1/3 text-4xl  text-black font-semibold  ">
              #1
            </h3>
            <svg
              className="rotate-[-25deg]"
              viewBox="0 0 100 100"
              width="100"
              height="100"
            >
              <defs>
                <path
                  id="circle"
                  d="
        M 51, 51
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="16">
                <textPath className="uppercase font-semibold " href="#circle">
                  Хамгийн шилдэг
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
}
