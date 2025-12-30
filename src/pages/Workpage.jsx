import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard.jsx';
import {projects} from "../utils/projects.js";


gsap.registerPlugin(ScrollTrigger);
/* same projects array as before */

export const Workpage = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const cardRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading & paragraph
            gsap.from(textRefs.current, {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRefs.current[0],
                    start: "top 80%",
                },
            });

            // Animate cards
            cardRefs.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 50,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                });

                // Hover float effect
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, { y: -10, scale: 1.02, duration: 0.4, ease: "power2.out" });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
                });

                // Floating tech icons
                const techIcons = card.querySelectorAll(".tech-icon");
                techIcons.forEach((icon, j) => {
                    gsap.to(icon, {
                        y: 5,
                        repeat: -1,
                        yoyo: true,
                        duration: 1 + j * 0.3,
                        ease: "sine.inOut",
                    });
                });
            });
        }, containerRef); // scope everything to this container

        // Cleanup automatically on unmount
        return () => ctx.revert();
    }, []);

    const setTextRef = (el) => { if (el && !textRefs.current.includes(el)) textRefs.current.push(el); };
    const setCardRef = (el) => { if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el); };

    return (
        <section ref={containerRef} className="min-h-screen bg-black text-gray-900 font-sans">
            <main className="px-12">
                {/* Hero / Intro Text */}
                <div className="max-w-3xl pt-16 pb-16">
                    <h1 className="text-7xl font-light mb-6 opacity-0" ref={setTextRef}>My Work</h1>
                    <p className="text-2xl text-gray-700 leading-relaxed opacity-0 max-w-2xl" ref={setTextRef}>
                        Discover my latest projects where <span className="text-indigo-500 font-semibold">design, technology, and creativity</span> merge to craft engaging digital experiences. Each project demonstrates <span className="text-indigo-500 font-semibold">problem-solving, innovation, and attention to detail</span>. Scroll down to explore my favorites.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
                    {projects.map((project) => (
                        <div ref={setCardRef} key={project.id}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                image={project.image}
                                color={project.color}
                                tech={project.tech.map((t) => ({ ...t, className: "tech-icon" }))}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};
