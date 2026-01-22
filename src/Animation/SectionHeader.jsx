import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedTextLines from './AnimatedTextLines';


export default function SectionHeader({ title, subtitle, description, dark = false }) {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const smHeaderRef = useRef(null);

    const textColor = dark ? 'text-white' : 'text-black';
    const borderColor = dark ? 'border-white' : 'border-black';
    const opacityColor = dark ? 'text-white/70' : 'text-black/70';

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contextRef.current,
                start: "top 90%",
            }
        });

        tl.from(headerRef.current, {
            y: "200",
            opacity: 0,
            duration: 1,
            ease: "circ.out"
        });

        if (subtitle) {
            tl.from(smHeaderRef.current, {
                y: "-200",
                opacity: 0,
                duration: 1,
                ease: "circ.out"
            }, "<+0.2");
        }
    }, { scope: contextRef });

    return (
        <div ref={contextRef} className={`w-full ${textColor}`}>
            {/* Main Title */}
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", overflow: "hidden" }}>
                <div ref={headerRef} className='flex flex-row justify-between items-center pt-12 px-10'>
                    <h1 className='uppercase banner-text-responsive text-4xl md:text-6xl font-bold'>
                        {title}
                    </h1>
                </div>
            </div>

            {/* Subtitle & Description Container */}
            <div className='relative '>
                {subtitle && (
                    <>
                        <div className={`absolute inset-x-10 border-t-2 ${borderColor}`} />
                        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", overflow: "hidden" }}>
                            <div ref={smHeaderRef} className='pt-4 px-10'>
                                <h2 className='uppercase text-xl md:text-3xl font-medium'>
                                    {subtitle}
                                </h2>
                            </div>
                        </div>
                    </>
                )}

                {/* If no subtitle, we might want a simple line or just the description */}
                {!subtitle && <div className={`border-t-2 ${borderColor} mx-0`} />}

                <div className='py-12 flex justify-end'>
                    <AnimatedTextLines 
                        body={description}
                        style={`uppercase text-sm md:text-base max-w-md ml-auto leading-tight font-medium ${opacityColor}`}
                    />
                </div>
            </div>
        </div>
    );
}