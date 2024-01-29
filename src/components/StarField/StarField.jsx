// Starfield.js
import React from 'react';
import styles from './Starfield.module.css';

const Starfield = ({ className = '' }) => {
  return (
    <div className={`${styles.body} ${className}`}>
      <div className={styles.starfield}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Starfield;
