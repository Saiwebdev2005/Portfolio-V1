"use client"
import React, { useEffect, useRef } from 'react';
import styles from './HeadText.module.css';

const Button = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const spans = textRef.current.querySelectorAll('span');
    const numLetters = spans.length;

    spans.forEach((span, i) => {
      const mappedIndex = i - (numLetters / 2);
      span.style.animationDelay = (mappedIndex * 0.25) + 's';
    });
  }, []);

  return (
    <div className={styles.container}>
      <p ref={textRef} className={styles.text} aria-label="Geist Mono">
        {Array.from('Sai Kumar').map((letter, i) => (
          <span key={i} aria-hidden="true">{letter}</span>
        ))}
      </p>
    </div>
  );
};

export default Button;
