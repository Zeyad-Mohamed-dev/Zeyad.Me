import React, { useRef, useState } from "react";
import SectionHeader from "../Animation/SectionHeader";
import { projects } from "../constants/constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";

function Projects() {
  const [currentImage, setCurrentImage] = useState(null);
  const previewRef = useRef(null);
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
    setCurrentImage(null);
    gsap.to(previewRef.current, {
        opacity: 0,
        duration: 0.3,
        scale: .95,
        ease: 'power2.inOut'
    })
  };
  return (
    <section id="projects" className="min-h-screen flex flex-col">
      <SectionHeader
        title="Projects"
        description="Explore my latest projects and see how I bring ideas to life."
      />

      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 group py-5 cursor-pointer"
          >
            <div
              className="flex justify-between px-10 items-center text-black 
                    transition-all duration-300 group-hover:bg-white md:group-hover:px-12 "
            >
              <h2 className="lg:text-[32px] text-[26px] leading-none">
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
            style={{ opacity: 0, transform: 'scale(0.95)' }}
            className="fixed top-0 left-0 border-8 border-black w-[760px]
                md:block hidden z-50 pointer-events-none"
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
