import React, { useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { projects } from '../utils/projects.js'; // import the projects array we just created

// --- ProjectBand Component ---
const ProjectBand = ({ title, description, link, tech, image, color }) => {
    const bandRef = useRef(null);
    const mockupRef = useRef(null);
    const overlayRef = useRef(null);

    // Hover animations
    useLayoutEffect(() => {
        const band = bandRef.current;
        const mockup = mockupRef.current;
        const overlay = overlayRef.current;

        const enterAnim = () => {
            gsap.to(mockup, {
                scaleY: 1.1,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                duration: 0.5,
            });
            gsap.to(overlay, { opacity: 0.2, duration: 0.5 });
        };

        const leaveAnim = () => {
            gsap.to(mockup, {
                scaleY: 1,
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                duration: 0.5,
            });
            gsap.to(overlay, { opacity: 0.1, duration: 0.5 });
        };

        band.addEventListener("mouseenter", enterAnim);
        band.addEventListener("mouseleave", leaveAnim);

        return () => {
            band.removeEventListener("mouseenter", enterAnim);
            band.removeEventListener("mouseleave", leaveAnim);
        };
    }, []);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            ref={bandRef}
            className="group relative block overflow-hidden py-12 px-12 mb-12 bg-gray-100 rounded-lg cursor-pointer"
        >
            {/* Project Title & Description */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">{title}</h2>
                <span className="text-sm uppercase tracking-widest opacity-75">{description}</span>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex gap-4 mt-4 z-10 relative">
                {tech.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-sm text-gray-500">
                        <t.icon className="text-xl" /> <span>{t.name}</span>
                    </div>
                ))}
            </div>

            {/* Mockup area */}
            <div
                ref={mockupRef}
                style={{ backgroundColor: color }}
                className="mt-8 h-32 md:h-40 w-full flex items-center gap-2 justify-around relative z-10 rounded-md overflow-hidden opacity-0 hover:opacity-1"
            >
                <img src={image} alt={title} className="object-cover w-[200px] h-[90px] opacity-80 w" />
                <img src={image} alt={title} className="object-cover w-[200px] h-[90px] opacity-80" />
                <img src={image} alt={title} className="object-cover w-[200px] h-[90px] opacity-80" />
                <img src={image} alt={title} className="object-cover w-[200px] h-[90px] opacity-80" />
                <img src={image} alt={title} className="object-cover w-[200px] h-[90px] opacity-80" />
                <img src={image} alt={title} className="object-cover w-[200px] h-[90px] opacity-80" />
            </div>

            {/* Large overlay text */}
            <div
                ref={overlayRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <p className="text-6xl md:text-8xl font-black text-gray-700 opacity-10 select-none">
                    {title.toUpperCase()}
                </p>
            </div>
        </a>
    );
};

// --- Workpage Component ---
export const Workpage = () => {
    const location = useLocation(); // React Router location
    const projectRefs = useRef([]);

    // Clear refs on re-render
    projectRefs.current = [];

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

    // Animate projects on route change
    useLayoutEffect(() => {
        if (projectRefs.current.length === 0) return;

        gsap.set(projectRefs.current, { opacity: 0, y: 50 });
        gsap.to(projectRefs.current, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
        });
    }, [location.pathname]);

    return (
        <section className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-4xl px-12 pt-16 pb-16">
                <h1 ref={addToRefs} className="text-7xl font-light mb-6">
                    My Work
                </h1>
                <p ref={addToRefs} className="text-lg text-gray-700">
                    Discover my latest projects where design, technology, and creativity come
                    together to craft engaging digital experiences. Below is a collection of my
                    favourites.
                </p>
            </div>

            <div className="w-full px-12">
                {projects.map((project) => (
                    <div key={project.id} ref={addToRefs}>
                        <ProjectBand
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            tech={project.tech}
                            image={project.image}
                            color={project.color}
                        />
                    </div>
                ))}

                <hr className="border-gray-300 mt-12" />
            </div>

            <div className="h-40"></div>
        </section>
    );
};
