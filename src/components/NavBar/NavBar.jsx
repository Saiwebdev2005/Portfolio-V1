"use client";
import { useState } from "react";
import Button from "../Button/GlowButton";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-2">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-c2 text-2xl md:text-5xl">Sai</h1>
            </div>
            {/* Desktop */}
            <div className="sm:ml-6">
              <div className="flex space-x-8 ">
                <Button buttonText="Testing">
                  {/* Add you resume link */}
                  <Link href="https://drive.google.com/file/d/1xwe9zWFc7dxTslzDv4pMl2axd37S-V98/view?usp=drive_link"></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
