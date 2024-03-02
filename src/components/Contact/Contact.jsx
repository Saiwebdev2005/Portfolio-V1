import React from "react";
import ContactFormNew from "./ContactForm";

// Data array
const formFieldsData = [
  { type: "text", placeholder: "Name" },
  { type: "text", placeholder: "Email" },
  { type: "textarea", placeholder: "Bio" },
];

// Contact component
const Contact = () => (
  <div id="getInTouch" className="w-full h-fit p-12 my-36 bg-c2">
    <div className="relative container flex flex-col justify-center items-center mx-auto max-w-5xl space-y-8">
      {/* Animation Image */}
      <div className="absolute -left-5 top-10">
        <img src="/assets/solana.png" alt="" className="w-14 h-16 floating" />
      </div>
      <div className="absolute -right-10 md:right-0 bottom-0">
        <img
          src="/assets/bitcoin1.svg"
          alt=""
          className="w-20 h-22 md:h-24 floating"
        />
      </div>
      <div className="absolute -left-10 md:left-10 bottom-0">
        <img
          src="/assets/bitcoin.svg"
          alt=""
          className="w-18 h-20 md:h-24 floating"
        />
      </div>
      <div className="absolute -right-10 md:right-10 top-0">
        <img
          src="/assets/polygon.svg"
          alt=""
          className="w-18 h-20 md:h-26 md:w-24 floating"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left section */}
        <div className="flex flex-col justify-center md:mb-16 items-center text-center md:text-left">
          <div className="w-64 space-y-4">
            <h1 className="text-6xl font-bold text-c3">Get In Touch</h1>
            <p className="font-poppins">
              If you’re interested in working with me or if you have any
              questions, please don’t hesitate to reach out. I look forward to
              the opportunity to work with you and contribute to your success.
            </p>
          </div>
        </div>
        {/* Right section */}
        <div className="flex flex-col space-y-6 w-1/2 font-sans">
          {/* {formFieldsData.map((field, index) => (
            <ContactForm key={index} {...field} />
          ))} */}
          <ContactFormNew />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
