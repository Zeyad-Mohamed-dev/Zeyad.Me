import React from 'react'
import SectionHeader from '../Animation/SectionHeader'
import { projects } from '../constants/constants'
import { Icon } from '@iconify/react'

function Projects() {
  return (
    <section id='projects' className='min-h-screen flex flex-col'>
        <SectionHeader 
        title="Projects" 
        description="Explore my latest projects and see how I bring ideas to life." />

        <div className='relative flex flex-col font-light'>
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    id='project'
                    className='relative flex flex-col gap-1 group py-5 cursor-pointer'
                > 
                    <div className='flex justify-between px-10 items-center text-black 
                    transition-all duration-300 group-hover:bg-white md:group-hover:px-12 '> 
                        <h2 className='lg:text-[32px] text-[26px] leading-none'>{project.title}</h2>
                    <Icon icon="fluent:arrow-up-right-16-regular" className='md:size-6 size-5' />
                    </div>

                    <div className='w-full h-0.5 bg-black'/>

                    <div className='flex px-10 gap-x-5 text-xs leading-loose uppercase
                    md:text-sm group-hover:text-gray-500 transition-colors duration-500'>
                        {project.tools.map((tool) => (
                            <p className='text-black transition-colors duration-500 group-hover:text-gray-500'>
                                {tool}
                            </p>
                        ))}
                    </div>
                    <div className='px-10 text-lg cursor-default'>
                        <p>{project.description}</p>
                    </div>

                    {/* mobile image view */}
                    <div  className= "relative md:hidden px-10 mt-4'">
                        <img src={project.img} className='w-full h-auto object-contain object-center rounded-xl'/>
                    </div>
                    
                </div>
            ))}

        </div>
    </section>
  )
}

export default Projects