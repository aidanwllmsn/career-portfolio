"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-cta"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Name Section */}
        <a
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold whitespace-nowrap text-white font-mono md:static md:left-auto md:transform-none"
        >
          Aidan Williamson
        </a>

        {/* Resume Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="resume.pdf"
            download="Williamson, Aidan Resume.pdf"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-buttonactive hover:bg-buttonactivehover focus:ring-blue-800 font-mono"
          >
            Resume
          </a>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "translate-y-0" : "-translate-y-96"
          } md:hidden absolute left-0 top-full w-full font-mono bg-mainbackground border border-[#27272a] z-50 flex flex-col items-center py-4 space-y-2 rounded-md shadow-md transition-transform duration-300 ease-in-out`}
          id="navbar-cta"
        >
          <ul className="flex flex-col items-center font-medium w-full">
            <li className="w-full">
              <a
                href="/"
                className="block w-full py-2 px-4 text-center text-white hover:text-buttonactivehover rounded-lg"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="block w-full py-2 px-4 text-center text-white hover:text-buttonactivehover rounded-lg"
              >
                About
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="block w-full py-2 px-4 text-center text-white hover:text-buttonactivehover rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Static Navbar for md+ */}
        <div
          className="hidden items-center justify-between w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:w-auto md:order-1 font-mono"
          id="navbar-md"
        >
          <ul className="flex space-x-4 font-medium">
            <li>
              <a
                href="/"
                className="block py-2 px-4 text-white hover:text-buttonactive rounded-lg"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:text-buttonactive rounded-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:text-buttonactive rounded-lg"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:text-buttonactive rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
