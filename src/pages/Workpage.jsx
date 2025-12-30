import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from "../utils/projects.js";

gsap.registerPlugin(ScrollTrigger);

export const Workpage = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const cardRefs = useRef([]);

    const setTextRef = (el) => { if (el && !textRefs.current.includes(el)) textRefs.current.push(el); };
    const setCardRef = (el) => { if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el); };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Animate heading & paragraph
            gsap.from(textRefs.current, {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRefs.current[0],
                    start: "top 90%", // start earlier
                },
            });

            // Animate cards with entrance + hover effects
            cardRefs.current.forEach((card, i) => {

                // Card entrance animation
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

                // Card tilt & scale on hover
                card.addEventListener("mousemove", (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const rotX = ((y / rect.height) - 0.5) * 10; // tilt up/down
                    const rotY = ((x / rect.width) - 0.5) * 10;  // tilt left/right
                    gsap.to(card, { rotationX: -rotX, rotationY: rotY, scale: 1.03, duration: 0.3 });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.5 });
                });

                // Floating tech icons
                const techIcons = card.querySelectorAll(".tech-icon");
                techIcons.forEach((icon, j) => {
                    gsap.fromTo(icon, { y: -5 }, {
                        y: 5,
                        repeat: -1,
                        yoyo: true,
                        duration: 1 + j * 0.3,
                        ease: "sine.inOut",
                        delay: 0.2 * j
                    });
                });

                // Animate "View Project" button on hover
                const button = card.querySelector(".view-project");
                if(button) {
                    gsap.set(button, { y: 20, opacity: 0 });
                    card.addEventListener("mouseenter", () => {
                        gsap.to(button, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
                    });
                    card.addEventListener("mouseleave", () => {
                        gsap.to(button, { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" });
                    });
                }
            });

            // Vertical line parallax
            gsap.to(".vertical-line", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Subtle background gradient shift
            gsap.to(containerRef.current, {
                backgroundPosition: "0% 100%",
                ease: "sine.inOut",
                duration: 20,
                repeat: -1,
                yoyo: true
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen relative bg-gradient-to-b from-black via-gray-900 to-#2c2c2c text-white font-sans overflow-hidden">

            {/* Vertical lines */}
            <div className="vertical-line absolute left-[6%] top-0 h-full w-px bg-white/30" />
            <div className="vertical-line absolute right-[6%] top-0 h-full w-px bg-white/30" />

            <main className="px-12 mt-6 ">
                {/* Hero / Intro Text */}
                <div className="max-w-6xl pt-16 pb-16 mb-6">
                    <h1 className="text-7xl font-light mb-6 text-white" ref={setTextRef}>My Work</h1>
                    <p className="text-2xl text-white/90 leading-relaxed w-full" ref={setTextRef}>
                        Discover my latest projects where <span className="text-indigo-500 font-semibold">design, technology, and creativity</span> merge to craft engaging digital experiences. Each project demonstrates <span className="text-indigo-500 font-semibold">problem-solving, innovation, and attention to detail</span>. Scroll down to explore my favorites.
                    </p>


                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
                    {projects.map((project) => (
                        <div ref={setCardRef} key={project.id} className="perspective">
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
