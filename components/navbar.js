import { Disclosure } from "@headlessui/react";
import logo from "../public/favicon.png";
import Image from "next/image";
import { AiOutlineContacts } from "react-icons/ai";
import { GiFarmTractor } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function Navbar() {
  const navigation = [
    {
      title: "Бидний тухай ",
      route: "about",
      icon: <HiOutlineDocumentText className="h-8 w-8 text-gray-500" />,
    },
    {
      title: "Бүтээгдэхүүн",
      route: "product",
      icon: <GiFarmTractor className="h-8 w-8 text-gray-500" />,
    },
    {
      title: "Холбоо барих",
      route: "contact",
      icon: <AiOutlineContacts className="h-8 w-8 text-gray-500" />,
    },
  ];
  return (
    <div className="w-full fixed top-0 z-30 bg-white shadow-md">
      <nav className="container relative flex flex-wrap items-center justify-between px-4 py-3 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open , index }) => (
            <>
              <div key={index} className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Disclosure>
                  <Image priority={true} height="auto" width={55} src={logo} alt="" />
                  <h3 className="font-bold ml-2 text-black">
                    F&F Catering LLC
                  </h3>
                </Disclosure>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:text-green-500  focus:outline-none "
                >
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex  flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <div key={index} className="flex  px-4 py-1 border-b-2 flex-row items-center w-full">
                        {item.icon}
                        <a
                          href={`#${item.route}`}
                          className="w-full p-4 text-gray-500   hover:text-green-500 focus:text-green-500  "
                        >
                          {item.title}
                        </a>
                      </div>
                    ))}
                    <a
                      target="_blank"
                      href="tel:+${props.desc}"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-green-600 rounded-full lg:ml-5"
                    >
                      Яг одоо захиалах
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href={`#${menu.route}`}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-green-500 focus:text-green-500  focus:outline-none "
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
