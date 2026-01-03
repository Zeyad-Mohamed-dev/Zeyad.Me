import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll';
import{socials} from "../constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
export default function Navbar() {
    const content = ["home", "about", "projects" , "contact"];
    const linksRef = useRef([]);
    const contactRef = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const navRef = useRef(null);
    let tl = useRef(null);
    let burTl = useRef(null);
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        if(!tl.current) return;
        open ? tl.current.reverse() : tl.current.play();
        open ? burTl.current.reverse() : burTl.current.play();
        setOpen(!open);
    }
    useGSAP(() => { 
        gsap.set(navRef.current, {xPercent: 1000});
        gsap.set([...linksRef.current, contactRef.current], {
            x: -20,
            autoAlpha: 0
        });

        tl.current = gsap.timeline({paused: true}).to(navRef.current, {
            xPercent: 0,
            duration: 1,
            ease: "power3.out"
        }).to(linksRef.current, {
            x:0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
        }, "-=0.4").to(contactRef.current, {
            x:0,
            autoAlpha: 1, 
            duration: 0.5,
            ease: "power2.out",
        })
        gsap.set([topLineRef.current, bottomLineRef.current], { 
            transformOrigin: "50% 50%" 
        });

        burTl.current = gsap.timeline({paused: true}).to(topLineRef.current, {
            rotate: 45,
            duration: 0.3,
            y: 3,
            ease: "power2.out",
        })
        .to(bottomLineRef.current, {
            rotate: -45,
            duration: 0.3,
            y: -3,
            ease: "power2.out"
        }, "<"), []
    }, [])
  return (
    <>
    
        <nav 
        ref={navRef}
        className='flex flex-col fixed z-50 w-full h-full px-10 uppercase gap-y-10 md:w-1/2 md:left-1/2 bg-black text-white/80 justify-between py-28'>
            {/* nav links */}
            <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-7xl '>
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
                    <div className='flex flex-col gap-x-2'>
                        {socials.map((social, index) => (
                            <a 
                            key={index}
                            className='hover:text-white uppercase transition-colors duration-300' href={social.url}>{social.name}</a>
                        ))}
                    </div>
                </div>    
            </div>
        </nav>
        <div 
        onClick={toggleNav}
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10">
            <span ref={topLineRef} className='block origin-center rounded-full w-8 h-0.5 bg-white'></span>
            <span ref={bottomLineRef} className='block origin-center rounded-full w-8 h-0.5 bg-white'></span>
        </div>
    </>
  )
}
