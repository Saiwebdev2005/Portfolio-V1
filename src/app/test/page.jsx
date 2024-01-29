"use client"
import React, { useState } from 'react';
import styles from './grid.module.css';

const items = [
  { text: 'React', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png', category: 'Web-Technology' },
  { text: 'Next.Js', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-worms.png', category: 'Web-Technology' },
  { text: 'TailwindCss', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-aurora.png', category: 'Web-Technology' },
  { text: 'null', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png', category: 'Web-Technology' },
  { text: 'JavaScript', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-huitzi.png', category: 'Languages' },
  { text: 'TypeScript', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-dali.png', category: 'Languages' },
  { text: 'Java', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-bride.png', category: 'Languages' },
  { text: 'C++', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-man.png', category: 'Languages' },
  { text: 'FireStore', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-d.png', category: 'Database' },
  { text: 'MongoDB', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png', category: 'Database' },
  { text: 'Redis', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png', category: 'Database' },
  { text: 'Solidity', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png', category: 'Web3 Technology' },
  { text: 'Hardhat', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png', category: 'Web3 Technology' },
  { text: 'ethers.js', i: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png', category: 'Web3 Technology' },
  // ... add the rest of your items here
];

function page() {
  const [currentCategory, setCurrentCategory] = useState('Web-Technology');

  const handleNavigationClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className='w-full py-12'>
      <main className={`${styles.container} max-w-6xl ml-36 mx-auto`}>
        <div className="navigation navigation flex justify-center space-x-2">
          {['Web-Technology', 'Languages', 'Database','Web3 Technology'].map((category, i) => (
            <button className='bg-c3 p-2 rounded-full' key={i} onClick={() => handleNavigationClick(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className={`${styles.items} mx-auto items-center p-2`}>
          {items.filter(item => item.category === currentCategory).map((item, index) => (
            <div className={`${styles.item}`} key={index}>
              <svg className={styles.svg} viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <clipPath id={`clip-${index}`}>
                    <circle className={styles.circle} cx="0" cy="0" r="400px" fill="#7510F7" />
                  </clipPath>
                </defs>
                <text className={`${styles.svgText} ${styles.text}`} x="50%" y="50%" dy=".3em">{item.text}</text>
                <g clipPath={`url(#clip-${index})`}>
                  <image className={styles.image} xlinkHref={item.i} width="100%" height="100%" preserveAspectRatio="xMinYMin slice" />
                  <text className={styles.svgMaskedText} x="50%" y="50%" dy=".3em">{item.text}</text>
                </g>
              </svg>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default page;
