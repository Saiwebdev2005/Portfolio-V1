"use client";
import chroma from "chroma-js";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./GlowButton.css";

export default function GlowButton({ buttonText, className }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    button.addEventListener("pointermove", (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      gsap.to(button, {
        "--button-glow": chroma
          .mix(
            getComputedStyle(button)
              .getPropertyValue("--button-glow-start")
              .trim(),
            getComputedStyle(button)
              .getPropertyValue("--button-glow-end")
              .trim(),
            x / rect.width
          )
          .hex(),
        duration: 0.2,
      });

      gsap.to(button, {
        "--button-glow-opacity": 1, // Make the glow fully visible
        duration: 1, // Increase the duration of the transition
      });
    });

    button.addEventListener("pointerout", () => {
      gsap.to(button, {
        "--button-glow-opacity": 0,
        duration: 1, // Increase the duration of the transition
      });
    });
  }, []);

  return (
    <div className={`${className}`}>
      <button ref={buttonRef} className={`glow-button`}>
        <span>{buttonText}</span>
        <div className="gradient"></div>
      </button>
    </div>
  );
}
