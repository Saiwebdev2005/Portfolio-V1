"use client";
import { useState } from "react";
import Button from "../Button/GlowButton";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-2 pt-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <img width="75px" height="75pxc:\Users\sasuk\OneDrive\Documents\favicon_io_prj_X\favicon.ico" src="/assets/Logo_Sai.png" />
            </div>
            {/* Desktop */}
            <div className="sm:ml-6">
              <div className="flex space-x-8 ">
                <Button buttonText="Resume" link="https://drive.google.com/file/d/14zUXBvgbp-rCVzRH4pe8NsvEzXOxPah0/view?usp=sharing">
                  {/* Add you resume link */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
