import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MdLightMode } from "react-icons/md"

import Logo from "./images/Logo.svg";

export default function Example() {

  function darkModeToggle() {
    const mode = localStorage.getItem("darkMode")
    console.log(mode)

    if (mode === "dark") {
      localStorage.setItem("darkMode", "light")
      document.documentElement.classList.remove('dark')
    } else if (mode === "light") {
      localStorage.setItem("darkMode", "dark")
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem("darkMode", "light")
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    darkModeToggle()
  }, [])

  return (
    <Popover className="relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-between md:space-x-10">
          <div className="flex justify-start lg:flex-1 items-center space-x-2 cursor-pointer">
            <a href="/#">
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
            </a>
            <a href="#/"><h1 className="text-white dark:text-primaryBlack font-bold">Ethereum</h1></a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-[#060606] rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:text-indigo-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 text-white dark:text-primaryBlack items-center"
          >
            <a
              href="/#"
              className="text-base font-bold text-white dark:text-primaryBlack hover:text-primary duration-150 dark:hover:text-primary"
            >
              Home
            </a>
            <a
              href="/#"
              className="text-base font-bold text-white dark:text-primaryBlack hover:text-primary duration-150 dark:hover:text-primary"
            >
              About
            </a>
            <a
              href="/#"
              className="text-base font-bold text-white dark:text-primaryBlack hover:text-primary duration-150 dark:hover:text-primary"
            >
              Community
            </a>
            <a
              href="/#"
              className="text-base font-bold text-white dark:text-primaryBlack hover:text-primary duration-150 dark:hover:text-primary"
            >
              FAQ
            </a>
            <button className="bg-primary px-5 py-2 rounded-lg border-2 border-primaryBlack font-bold text-primaryBlack dark:bg-white dark:text-primary dark:border-primary duration-150 hover:bg-primaryBlack hover:text-primary dark:hover:bg-primary dark:hover:text-primaryBlack">Whitepaper</button>
            <MdLightMode onClick={() => darkModeToggle()} className="cursor-pointer duration-200 hover:scale-150" />
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-zinc-900 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                  <h1 className="text-white ">Ethereum</h1>
                  <MdLightMode onClick={() => darkModeToggle()} className="cursor-pointer duration-200 hover:scale-150" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-[#060606] rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-primary"
                  >
                    <span className="ml-3 text-base font-bold text-white ">
                      Home
                    </span>
                  </a>
                  <a
                    href="/#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-primary"
                  >
                    <span className="ml-3 text-base font-bold text-white">
                      About
                    </span>
                  </a>
                  <a
                    href="/#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-primary"
                  >
                    <span className="ml-3 text-base font-bold text-white">
                      Community
                    </span>
                  </a>
                  <a
                    href="/#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-primary"
                  >
                    <span className="ml-3 text-base font-bold text-white">
                      FAQ
                    </span>
                  </a>
                  <div className="bg-primary w-full h-[45px] flex justify-center items-center rounded-lg text-[16px] cursor-pointer">
                    <span className="text-black font-bold">Whitepaper</span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
