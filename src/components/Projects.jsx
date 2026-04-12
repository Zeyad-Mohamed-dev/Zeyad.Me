import React, { useRef, useState } from "react";
import SectionHeader from "../Animation/SectionHeader";
import { projects } from "../constants/constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Projects() {
  const [currentImage, setCurrentImage] = useState(null);
  const previewRef = useRef(null);
  const moveX = useRef(null);
  const moveY = useRef(null);
const mouse = useRef({x: 0, y: 0});
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, 'x', {
        ease: "power3.out"
    })
    moveY.current = gsap.quickTo(previewRef.current, 'y', {
        ease: "power3.out"
    })
  })
  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentImage(index);
    gsap.to(previewRef.current, {
        opacity: 1,
        duration: 0.3,
        scale: 1,
        ease: 'power2.inOut',
    })
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    gsap.to(previewRef.current, {
        opacity: 0,
        duration: 0.1,
        scale: .95,
        ease: 'power2.inOut'
    })
  
  };
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX - 10;
    mouse.current.y = e.clientY - 350;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  }
  return (
    <section id="projects" className="flex flex-col">
      <SectionHeader
        title="Projects"
        description="Explore my latest projects and see how I bring ideas to life."
      />

      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            
            
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 group py-5 cursor-pointer"
          >
            <div
            onMouseMove={(e) => handleMouseMove(e)}
              className="flex justify-between px-10 items-center text-black 
                    transition-all duration-300 group-hover:bg-white md:group-hover:px-12 "
            >
              <h2 onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave} className="lg:text-[32px] text-[26px] leading-none">
                
                {project.title}
              </h2>
              <Icon
                icon="fluent:arrow-up-right-16-regular"
                className="md:size-6 size-5"
              />
            </div>

            <div className="w-full h-0.5 bg-black" />

            <div
              className="flex px-10 gap-x-5 text-xs leading-loose uppercase
                    md:text-sm group-hover:text-gray-500 transition-colors duration-500"
            >
              {project.tools.map((tool) => (
                <p className="text-black transition-colors duration-500 group-hover:text-gray-500">
                  {tool}
                </p>
              ))}
            </div>
            <div className="px-10 text-lg cursor-default">
              <p>{project.description}</p>
            </div>

            {/* mobile image view */}
            <div className="relative md:hidden px-10 mt-4'">
              <img
                src={project.img}
                className="w-full h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
      {/* desktop project image view */}
      <div>
        {(
          <div
            ref={previewRef}
            
            className="fixed top-0 left-0 border-8 border-black w-[760px]
                md:block hidden z-50 opacity-0 pointer-events-none"
          >
            <img
              src={projects[currentImage]?.img}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
