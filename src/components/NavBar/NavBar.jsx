"use client";
import { useState } from "react";
import Button from "../Button/GlowButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-2">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-c2 text-2xl md:text-5xl">Sai</h1>
            </div>
            {/* Desktop */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-8">
                <Button buttonText="Resume">
                  <a href="https://drive.google.com/file/d/1xwe9zWFc7dxTslzDv4pMl2axd37S-V98/view?usp=drive_link"></a>
                </Button>
                <Button buttonText="Projects">
                  <a href="#Project">Projects</a>
                </Button>
                <Button buttonText="Contact" className={""}>
                  <a
                    href="#getInTouch"
                    className="text-white hover:text-c3 rounded-lg border-4 border-white hover:border-c2 px-3 py-2  text-md font-sans font-bold duration-300"
                  >
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="flex flex-col w-fit px-2 pt-2 pb-3 space-y-4">
          <Button buttonText="Resume">
            <a href="https://drive.google.com/file/d/1xwe9zWFc7dxTslzDv4pMl2axd37S-V98/view?usp=drive_link"></a>
          </Button>
          <Button buttonText="Projects">
            <a href="#Project">Projects</a>
          </Button>
          <Button buttonText="Get In Touch">
            <a
              href="#getInTouch"
              className="text-white hover:text-c3 rounded-lg border-4 border-white hover:border-c2 px-3 py-2  text-md font-sans font-bold duration-300"
            >
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
