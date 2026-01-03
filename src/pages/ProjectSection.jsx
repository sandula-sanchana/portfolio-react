import React, { useRef, useLayoutEffect } from 'react';
import { projects } from '../utils/projects.js';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AbstractBackground from '../utils/AbstractBackground.jsx'; // <-- IMPORT THE NEW BACKGROUND

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    // Ref for the main container to scope the animation
    const projectsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ... (Your existing GSAP logic is unchanged)
            const projectItems = gsap.utils.toArray('.project-item');

            projectItems.forEach((item, index) => {
                const startX = index % 2 === 0 ? '-100%' : '100%';

                gsap.from(item, {
                    x: startX,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'bottom top',
                        toggleActions: 'play none none none',
                    },
                });
            });
        }, projectsRef);

        return () => ctx.revert();
    }, []);

    return (
        // 1. Change section to 'relative' and set a base background color
        // (I used dark slate to harmonize with the background shapes)
        <section ref={projectsRef} id="projects"
                 className="relative min-h-screen py-16 bg-slate-900 text-white overflow-hidden"
        >
            {/* 2. Insert the Abstract Background component here */}
            <AbstractBackground />

            {/* 3. Main content wrapper needs a z-index to stay above the background */}
            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-black text-white mb-16 uppercase tracking-tight">
                    Projects
                </h2>

                <div className="grid grid-cols-1 gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <div key={project.id}
                            // Added bg-white/10 for a slight contrast overlay
                             className="project-item overflow-hidden shadow-2xl rounded-lg group backdrop-blur-sm bg-white/10"
                             style={{ backgroundColor: project.color }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col lg:flex-row w-full h-full transition-all duration-300"
                            >
                                {/* 1. Project Image/Visual Block */}
                                <div
                                    className={`relative w-full lg:w-3/5 xl:w-7/12 h-64 lg:h-auto overflow-hidden 
                                        ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                                    />
                                </div>

                                {/* 2. Project Details Block - Ensure text is white/light */}
                                <div
                                    className={`w-full lg:w-2/5 xl:w-5/12 p-8 md:p-12 text-white flex flex-col justify-center 
                                        ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                                >
                                    <h3 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl mb-6 opacity-80">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tech.map((techItem, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="flex items-center space-x-2 px-3 py-1 text-sm font-medium bg-white/20 rounded-full backdrop-blur-sm"
                                            >
                                                <techItem.icon className="w-4 h-4" />
                                                <span>{techItem.name}</span>
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Button/Indicator */}
                                    <div className="flex items-center mt-4 text-lg font-semibold border-b-2 border-white w-max pb-1 transition-all duration-300 group-hover:pl-2">
                                        View Code on GitHub
                                        <FaExternalLinkAlt className="ml-3 w-4 h-4" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;