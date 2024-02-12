"use client";
import React, { useEffect, useState } from 'react'
import Button from '../Button/GlowButton';
function BackToTop() {
  const [backToTopButton,setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 800)
      {
        setBackToTopButton(true);
      }
      else{
        setBackToTopButton(false);
      }
    })
  },[])
  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div>
      {backToTopButton && (
        <button className='z-10 bg-white text-purple-600 rounded-full fixed bottom-12 right-12 h-12 w-12 text-2xl' onClick={scrollUp}><img src="/assets/rocket.png" alt="" className=' rounded-full p-1 duration-200 shadow-lg shadow-purple-600' /></button>
      )}
    </div>
  )
}

export default BackToTop