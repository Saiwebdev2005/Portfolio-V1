import React from 'react';
import './GlowButton.css'; // Assuming you saved your CSS in a file named Button.css

const Button = ({ buttonText,className }) => {
  return (
    <button className="custom-button ">
      <div className={`button-content ${className}`}>
        {buttonText}
      </div>
    </button>
  );
};

export default Button;