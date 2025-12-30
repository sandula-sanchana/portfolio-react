import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../utils/projects";
import WorkCard from "../components/WorkCard.jsx";

gsap.registerPlugin(ScrollTrigger);

export const Workpage = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            const cards = gsap.utils.toArray(".work-card");

            const totalWidth =
                cards.reduce((acc, card) => acc + card.offsetWidth, 0) +
                (cards.length - 1) * 400;

            gsap.to(track, {
                x: () => `-${totalWidth - window.innerWidth}`,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Floating icons
            gsap.utils.toArray(".floating-icon").forEach((icon, i) => {
                gsap.to(icon, {
                    y: i % 2 === 0 ? 30 : -30,
                    duration: 4 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen bg-black text-white overflow-hidden"
        >
            {/* Header */}
            <div className="absolute top-20 left-16 z-10">
                <h1 className="text-[9rem] leading-none uppercase font-bold tracking-tight">
                    My Recent
                    <br />
                    Works
                </h1>
            </div>

            {/* Floating Icons */}
            <div className="floating-icon absolute top-40 left-[45%] bg-red-500 w-20 h-20 rounded-full flex items-center justify-center text-black text-3xl">
                →
            </div>
            <div className="floating-icon absolute top-20 right-24 bg-lime-400 w-20 h-20 rounded-full flex items-center justify-center text-black text-3xl">
                ⚡
            </div>

            {/* Horizontal Track */}
            <div
                ref={trackRef}
                className="absolute bottom-20 left-0 flex gap-[120px] px-[50vw]"
            >
                {projects.map((project) => (
                    <WorkCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
