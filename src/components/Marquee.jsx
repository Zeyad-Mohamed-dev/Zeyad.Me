import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

export default function Marquee({items, className = "text-white bg-black"}) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const scrollRef  = useRef(null);
  const tl = useRef(null);
  useGSAP(() => {
    gsap.set(scrollRef.current, {
        xPercent: -50
    })
    tl.current = gsap.to(scrollRef.current,{
      xPercent: 0,
      repeat: -1,
      duration: 20,
      ease: "none",
    });

    
  }, {scope: containerRef})
  
  const handleMouseEnter = () => {
    tl.current?.pause();
  };
  const handleMouseLeave = () => {
    tl.current?.play();
  };
  
  return (
    <div 
    ref={containerRef}
            onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    className={`
        overflow-hidden
        flex items-center w-full h-10 md:h-[100px] font-light uppercase tracking-wider whitespace-nowrap
        ${className}
    `}>
        <div
        ref={scrollRef}
         className='flex'>
            {[...items, ...items].map((item, index) => (
            <span 
            key={index}
            ref={(el) => itemsRef.current[index] = el}
            className='flex items-center py-2 gap-x-32 px-16 cursor-pointer'>
                {item}
            </span>
        ))}
        </div>
        
    </div>
  )
}
