import React, { Suspense, useRef } from 'react'
import AnimatedTextLines from '../Animation/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'
import { Planet } from '../Animation/Planet';
import { AmbientLight } from 'three';
import { useMediaQuery } from 'react-responsive';

export default function Hero() {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const smHeaderRef = useRef(null);
    const isSmall = useMediaQuery({maxWidth: 850});
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })
        tl.from(headerRef.current, {
            y: "200",
            opacity: 0,
            duration: 1,
            ease: "circ.out"
        }, "<+0.2")

        tl.from(smHeaderRef.current, {
            y: "-200",
            opacity: 0,
            duration: 1
        })
    })
    return (
    <section id='home' className='flex flex-col justify-end min-h-screen'>
        <div ref={contextRef}>
            <div style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", overflow: "hidden"}}>
                <div 
                ref={headerRef}
                className='flex flex-row justify-between items-center pt-12'>
                    <div className='px-10'>
                        <h1 className='uppercase banner-text-responsive text-4xl md:text-6xl'>
                            Zeyad Mohamed
                        </h1>
                    </div>
                    
                </div>
                
            </div>
            <div className='relative px-10 text-black'>
                    <div className='absolute inset-x-0 border-t-2 border-black'/>
                    <div style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", overflow: "hidden"}}>
                        <div className='block md:block px-10' ref={smHeaderRef}>
                        <h1 className='uppercase md:text-3xl'>
                            Fullstack developer
                        </h1>
                    </div>
                    </div>
                    
                    <div className='py-12 flex justify-end'>
                        <AnimatedTextLines body={`Engineering the future of digital interaction. 
                        Currently focused on mastering full-stack ecosystems and creating high-impact web applications for the modern era.`}
                        style={"uppercase text-sm md:text-base max-w-md ml-auto leading-tight font-medium"}
                        />
                    </div>
                </div>
        </div>
        <figure className='absolute inset-0 -z-[50] pointer-events-none '>
            <div className='absolute inset-0 z-0'>
                <Canvas sca shadows camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}>
                    <ambientLight intensity={0.5}/>
                    <Float speed={0.5}>
                        <Planet scale={isSmall ? 0.7 : 1}/>
                    </Float>
                    
                    <Environment resolution={256}>
                            <group rotation={[-Math.PI / 3, 4, 1]}>
                                <Lightformer 
                                form={"circle"} 
                                scale={10} 
                                intensity={2} 
                                position={[0, 5, -9]}/>
                                <Lightformer 
                                form={"circle"} 
                                scale={10} 
                                intensity={2} 
                                position={[0, 3, 1]}/>
                                <Lightformer 
                                form={"circle"} 
                                scale={10} 
                                intensity={2} 
                                position={[-5, -1, -1]}/>
                                <Lightformer 
                                form={"circle"} 
                                scale={16} 
                                intensity={2} 
                                position={[10, 1, 0]}/>
                            </group>
                    </Environment>
                </Canvas>
            </div>
        </figure>
    </section>
  )
}
