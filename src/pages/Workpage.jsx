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
            className="
    relative h-screen bg-black text-white overflow-hidden
    max-md:h-auto max-md:py-24
  "
        >
            {/* Side vertical lines (hidden on mobile) */}
            <div className="absolute left-[6%] top-0 h-full w-px bg-white/30 max-md:hidden" />
            <div className="absolute right-[6%] top-0 h-full w-px bg-white/30 max-md:hidden" />

            {/* Header */}
            <div className="absolute top-20 left-16 z-10 max-md:static max-md:px-6 max-md:mb-12">
                <h1
                    className="
        font-bold uppercase tracking-tight leading-none
        text-[clamp(3rem,8vw,9rem)]
      "
                >
                    My Recent
                    <br />
                    Works
                </h1>
            </div>

            {/* Floating Icons */}
            {/* Arrow */}
            <div
                className="
      floating-icon absolute top-40 left-[45%]
      bg-red-500 text-black rounded-full flex items-center justify-center
      w-20 h-20 text-[clamp(1.5rem,2vw,3rem)]
      lg:w-20 lg:h-20
      md:w-16 md:h-16
      max-md:hidden
    "
            >
                →
            </div>

            {/* Lightning */}
            <div
                className="
      floating-icon absolute top-20 right-24
      bg-lime-400 text-black rounded-full flex items-center justify-center
      w-20 h-20 text-[clamp(1.5rem,2vw,3rem)]
      lg:w-20 lg:h-20
      md:w-16 md:h-16
      max-md:hidden
    "
            >
                ⚡
            </div>

            {/* Horizontal Track / Projects */}
            <div
                ref={trackRef}
                className="
      absolute bottom-20 left-0 flex
      gap-[clamp(2rem,5vw,7rem)]
      px-[clamp(20vw,50%,50vw)]

      lg:gap-[120px] lg:px-[50vw]
      md:gap-24 md:px-[30vw]

      max-md:static max-md:flex-col max-md:gap-10 max-md:px-6 max-md:pb-16
    "
            >
                {projects.map((project) => (
                    <WorkCard key={project.id} project={project} />
                ))}
            </div>
        </section>

    );
};
