import React, { useRef, useLayoutEffect, useState, useMemo } from 'react';
import { projects, CATEGORY } from '../utils/projects.js';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AbstractBackground from '../utils/AbstractBackground.jsx'; // <-- IMPORT THE NEW BACKGROUND

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FILTERS = ["All", CATEGORY.SE, CATEGORY.ML];

// Distinct badge styling per category so SE vs ML projects are identifiable at a glance
const badgeStyles = {
    [CATEGORY.SE]: "bg-sky-400/20 text-sky-300 border-sky-400/40",
    [CATEGORY.ML]: "bg-violet-400/20 text-violet-300 border-violet-400/40",
};

const ProjectsSection = () => {
    // Ref for the main container to scope the animation
    const projectsRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const visibleProjects = useMemo(
        () => (activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)),
        [activeFilter]
    );

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

            ScrollTrigger.refresh();
        }, projectsRef);

        return () => ctx.revert();
    }, [activeFilter]);

    return (
        // 1. Change section to 'relative' and set a base background color
        // (I used dark slate to harmonize with the background shapes)
        <section
            ref={projectsRef}
            id="projects"
            className="relative min-h-screen py-16 bg-slate-900 text-white overflow-hidden"
        >
            {/* Background Shapes */}
            <AbstractBackground />

            {/* Main Content */}
            <div className="container mx-auto px-4 mt-5 md:px-8 lg:px-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight drop-shadow-lg">
                    Projects
                </h2>

                {/* Category filter */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full border text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                                activeFilter === filter
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 text-white/70 border-white/20 hover:border-white/50 hover:text-white"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-12 lg:gap-16">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-item overflow-hidden shadow-2xl rounded-3xl group backdrop-blur-sm bg-white/10 border border-white/5 hover:shadow-3xl transition-shadow duration-500"
                            style={{ backgroundColor: project.color }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col lg:flex-row w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-[1.02]"
                            >
                                {/* Project Image */}
                                <div
                                    className={`relative w-full lg:w-3/5 xl:w-7/12 h-64 lg:h-auto overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none ${
                                        index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                                    }`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
                                    />
                                </div>

                                {/* Project Details */}
                                <div
                                    className={`w-full lg:w-2/5 xl:w-5/12 p-8 md:p-12 flex flex-col justify-center ${
                                        index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                                    }`}
                                >
                                    <span
                                        className={`inline-block w-fit mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${badgeStyles[project.category]}`}
                                    >
                                        {project.category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl mb-6 opacity-80 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tech.map((techItem, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="flex items-center space-x-2 px-3 py-1 text-sm font-medium bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                                            >
                                        <techItem.icon className="w-4 h-4 text-white" />
                                        <span>{techItem.name}</span>
                                    </span>
                                        ))}
                                    </div>

                                    {/* Link Button */}
                                    <div className="flex items-center mt-4 text-lg font-semibold border-b-2 border-white w-max pb-1 transition-all duration-300 group-hover:pl-2 group-hover:text-yellow-400">
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