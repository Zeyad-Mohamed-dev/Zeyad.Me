import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedTextLines from '../Animation/AnimatedTextLines';

export default function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef([]);
  const badgesRef = useRef([]);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "📝" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML/CSS", icon: "🏗️" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "💚" },
        { name: "NestJS", icon: "⚙️" },
        { name: "Express", icon: "🚂" },
        { name: "RESTful APIs", icon: "🔌" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Database Design", icon: "📊" }
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      category: "Full-Stack",
      skills: [
        { name: "MERN Stack", icon: "📦" },
        { name: "System Architecture", icon: "🏛️" },
        { name: "DevOps Basics", icon: "🛠️" },
        { name: "Performance Tuning", icon: "⚡" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const techBadges = [
    { name: "MERN", icon: "⚛️", highlight: true },
    { name: "NestJS", icon: "🏗️", highlight: true },
    { name: "PostgreSQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "React", icon: "⚡" },
    { name: "Node.js", icon: "🟢" }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      }
    });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(skillsRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.5")
    .from(badgesRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.5)"
    }, "-=0.4");
  });

  return (
    <section 
      id='skills' 
      ref={sectionRef}
      className='min-h-screen bg-black px-10 py-20 md:px-16 md:py-28'
    >
      {/* Title Section */}
      <div 
        ref={titleRef}
        className='max-w-4xl mb-16 md:mb-24'
      >
        <h2 className='uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
          Technical Arsenal
        </h2>
        <AnimatedTextLines 
          body="Specialized in modern full-stack development. Leveraging cutting-edge technologies to build scalable, high-performance applications across the entire stack."
          style="uppercase text-sm md:text-base text-white/70 leading-relaxed max-w-2xl"
        />
      </div>

      {/* Skill Categories Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20'>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            ref={(el) => skillsRef.current[index] = el}
            className={`group relative overflow-hidden rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5`}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}/>

            {/* Content */}
            <div className='relative z-10'>
              {/* Category Title */}
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                {category.category}
              </h3>

              {/* Skills List */}
              <div className='space-y-3'>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className='flex items-center gap-3 group/skill'
                  >
                    <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:w-6 transition-all duration-300`}/>
                    <span className='text-lg'>{skill.icon}</span>
                    <span className='text-white/80 group-hover/skill:text-white transition-colors duration-300 font-medium'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-300`}/>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Badges Section */}
      <div className='max-w-4xl'>
        <div className='mb-8'>
          <h3 className='uppercase text-xl md:text-2xl font-bold text-white/80 mb-2'>
            Core Stack
          </h3>
          <div className='w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'/>
        </div>

        {/* Badges Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {techBadges.map((badge, index) => (
            <div
              key={index}
              ref={(el) => badgesRef.current[index] = el}
              className={`group relative p-4 rounded-xl border transition-all duration-300 text-center cursor-pointer ${
                badge.highlight
                  ? 'bg-gradient-to-br from-white/15 to-white/5 border-white/30 hover:border-white/50 hover:from-white/25 hover:to-white/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <div className='text-3xl mb-2 group-hover:scale-125 transition-transform duration-300'>
                {badge.icon}
              </div>
              <p className='text-xs md:text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-300'>
                {badge.name}
              </p>

              {/* Glow Effect */}
              {badge.highlight && (
                <div className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg shadow-blue-500/20'/>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Proficiency Indicator */}
      <div className='mt-20 md:mt-28 pt-16 md:pt-20 border-t border-white/10 max-w-2xl'>
        <h3 className='uppercase text-xl md:text-2xl font-bold text-white/80 mb-8'>
          Proficiency Level
        </h3>
        <div className='space-y-6'>
          {[
            { label: "Full-Stack Development", percentage: 95 },
            { label: "Backend Architecture", percentage: 90 },
            { label: "Frontend Engineering", percentage: 92 },
            { label: "Database Design", percentage: 88 }
          ].map((item, index) => (
            <div key={index}>
              <div className='flex justify-between mb-2'>
                <span className='text-sm md:text-base text-white/70 uppercase font-medium'>{item.label}</span>
                <span className='text-white font-bold'>{item.percentage}%</span>
              </div>
              <div className='h-2 bg-white/10 rounded-full overflow-hidden'>
                <div 
                  className='h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full'
                  style={{ width: `${item.percentage}%`, transition: 'width 1s ease-out' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
