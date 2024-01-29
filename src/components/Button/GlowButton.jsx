import React from 'react';
import './GlowButton.css'; // Assuming you saved your CSS in a file named Button.css

const Button = ({ buttonText,className }) => {
  return (
    <div class=" w-full flex items-center justify-center">
      <a href="#_" class={`relative inline-block text-lg group transform transition-transform duration-500 hover:scale-110 ${className}`}>
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-c2 transition-colors duration-300 ease-out border-2 border-c1 rounded-lg group-hover:text-white ">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-c3 group-hover:-rotate-180 ease"></span>
          <span class="relative">{buttonText}</span>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-c3 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </a>
    </div>
  );
};

export default Button;