import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useMemo, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
function AnimatedTextLines({body, style}) {
    // const lines = body.split("\n").filter(line => line.trim("") !== "");
  const lines = body.split("\n").filter(line => line.trim() !== "")
  const linesRef = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    if(linesRef.current.length > 0) {
      gsap.from(linesRef.current, {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: containerRef.current
      }
    })
    }
    
  })

   
  return (
    <div className={style} ref={containerRef}>
        {lines.map((l, index) => (
            <div
            key={index}
            className='block text-pretty tracking-wide leading-relaxed'
            ref={(el) => linesRef.current[index] = el}>
                {l}
            </div>
        ))}
    </div>
  )
}

export default AnimatedTextLines