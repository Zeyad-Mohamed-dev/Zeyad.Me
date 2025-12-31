import React, { useRef } from 'react'
import { Link } from 'react-scroll';

export default function Navbar() {
    const content = ["home", "about", "projects" , "contact"];
    const linksRef = useRef([]);
    const contactRef = useRef(null);
  return (
    <nav className='flex flex-col fixed z-50 w-full h-full px-10 uppercase gap-y-10 md:w-1/2 bg-black text-white/80 justify-between py-28'>
        {/* nav links */}
        <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl '>
            {content.map((c, index) => (
                <div ref={(el) => linksRef.current[index] = el}>
                    <Link href="" className='hover:text-white transition-all duration-300'>{c}</Link>
                </div>
                
            ) )}
        </div>
        
        {/* contact info */}
        <div 
        ref={contactRef}
        className='flex flex-col md:flex-row flex-wrap justify-between gap-8'>
            <div className='font-light'>
                <p className='text-white/50'>Email</p>
                <p className='text-xl lowercase text-pretty'>ziadmohomar123@gmail.com</p>
            </div>

            <div className='font-light'>
                <p className='tracking-wider text-white/50'>Social media</p>
            </div>    
        </div>
    </nav>
  )
}
