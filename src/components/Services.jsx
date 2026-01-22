import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTextLines from "../Animation/AnimatedTextLines";
import { useMediaQuery } from "react-responsive";

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesGridRef = useRef([]);
  const isDesktop = useMediaQuery({minWidth: "48rem"})

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, performant UIs with React, Tailwind CSS, and modern JavaScript. Focused on clean architecture and optimal user experience.",
      tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Backend Development",
      description:
        "Crafting scalable APIs and server-side solutions using Node.js. Expertise in database design, authentication, and RESTful architecture.",
      tools: ["Node.js", "Express", "NestJS", "TypeOrm"],
    },
    {
      title: "Full-Stack Solutions",
      description:
        "Delivering end-to-end applications from database design to UI implementation. Seamless integration across all layers of the stack.",
      tools: [ "App Router", "Docker", "Vercel"],
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed and efficiency. Profiling, caching strategies, and modern performance best practices.",
      tools: ["Lighthouse", "Redis", "Web Vitals"],
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }).from(
      servicesGridRef.current,
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.5",
    );
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black rounded-t-3xl "
    >
      {/* Title Section */}
      <div
        ref={titleRef}
        className="max-w-4xl px-10 pt-20 md:px-16 md:pt-28 mb-16 md:mb-24"
      >
        <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Services & Expertise
        </h2>
        <AnimatedTextLines
          body="Comprehensive full-stack development solutions designed to elevate your digital presence. From concept to deployment, I deliver quality-driven results."
          style="uppercase text-sm md:text-base text-white/70 leading-relaxed max-w-2xl"
        />
      </div>

      {services.map((service, index) => (
  <div
    key={index}
    ref={(el) => (servicesGridRef.current[index] = el)}
    className="sticky bg-black text-white border-t-2 border-white/30"
    style={ { top: "0"}}

  >
    <div className="px-10 md:px-16 pt-12 pb-16">
      
      <div className="mb-10">
        <h3 className="text-2xl md:text-4xl uppercase font-semibold">
          {service.title}
        </h3>
        <p className="text-white/50 mt-4 text-lg max-w-2xl leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="flex flex-col gap-6 text-xl lg:text-2xl text-white/80">
        {service.tools.map((tool, itemIndex) => (
          <div key={`tool-${index}-${itemIndex}`}>
            <h4 className="flex items-baseline">
              {/* This span creates the consistent '01' column */}
              <span className="w-12 md:w-20 shrink-0 text-sm md:text-lg text-white/30 font-mono">
                0{itemIndex + 1}
              </span>
              <span className="uppercase tracking-tight">{tool}</span>
            </h4>
            {itemIndex < service.tools.length - 1 && (
              <div className="w-full h-px bg-white/10 mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
))}
    </section>
  );
}
