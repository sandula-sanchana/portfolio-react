import React, { useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { projects } from "../utils/projects.js"; // your projects array

// --- ProjectBand Component ---
const ProjectBand = ({ title, description, link, tech, image, color }) => {
    const bandRef = useRef(null);
    const mockupRef = useRef(null);
    const overlayRef = useRef(null);

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
            gsap.to(mockup.querySelectorAll("img"), {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
            });
            gsap.to(overlay, { opacity: 0.2, duration: 0.5 });
        };

        const leaveAnim = () => {
            gsap.to(mockup, {
                scaleY: 1,
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                duration: 0.5,
            });
            gsap.to(mockup.querySelectorAll("img"), {
                opacity: 0,
                x: -20,
                duration: 0.5,
                stagger: 0.05,
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
            className="group relative block overflow-hidden py-6 px-6 bg-gray-100 rounded-lg cursor-pointer"
        >
            {/* Title & Description */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 relative z-10">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">{title}</h2>
                <span className="text-xs uppercase tracking-widest opacity-75">{description}</span>
            </div>

            {/* Tech Stack */}
            <div className="flex gap-2 mt-2 z-10 relative flex-wrap">
                {tech.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                        <t.icon className="text-lg" /> <span>{t.name}</span>
                    </div>
                ))}
            </div>

            {/* Image Carousel */}
            <div
                ref={mockupRef}
                style={{ backgroundColor: color }}
                className="mt-4 h-24 md:h-32 w-full flex items-center gap-2 justify-around relative z-10 rounded-md overflow-hidden"
            >
                {[...Array(6)].map((_, idx) => (
                    <img
                        key={idx}
                        src={image}
                        alt={`${title} ${idx + 1}`}
                        className="object-cover w-[100px] md:w-[150px] h-[60px] md:h-[90px] opacity-0 rounded-md flex-shrink-0"
                    />
                ))}
            </div>

            {/* Large overlay text */}
            <div
                ref={overlayRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <p className="text-4xl md:text-6xl font-black text-gray-700 opacity-10 select-none">
                    {title.toUpperCase()}
                </p>
            </div>
        </a>
    );
};

// --- Workpage Component (Grid Layout) ---
export const Workpage = () => {
    const location = useLocation();
    const projectRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

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
            <div className=" px-12 pt-16 pb-16">
                <h1 ref={addToRefs} className="text-6xl md:text-7xl font-light mb-6">
                    My Work
                </h1>
                <p ref={addToRefs} className="text-lg text-gray-700 mb-12">
                    Discover my latest projects where design, technology, and creativity come together
                    to craft engaging digital experiences. Below is a collection of my favourites.
                </p>

                {/* Grid of projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-12">
                    {projects.map((project) => (
                        <ProjectBand key={project.id} {...project} />
                    ))}
                </div>



                <hr className="border-gray-300 mt-12" />
            </div>

            <div className="h-40"></div>
        </section>
    );
};
