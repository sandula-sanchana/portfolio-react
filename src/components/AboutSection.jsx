import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import MarqueeComponent from "./MarqueeComponent.jsx";

import pic from "../assets/pic.jpg"; // ✅ correct image import

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const linesRef = useRef([]);
    const imageRef = useRef(null);

    useGSAP(() => {
        /* -------------------- TEXT SPLIT REVEAL -------------------- */
        const split = new SplitType(textRef.current, {
            types: "words",
        });

        gsap.from(split.words, {
            y: 120,
            opacity: 0,
            rotateX: 80,
            transformOrigin: "50% 50% -60",
            duration: 1.4,
            ease: "power4.out",
            stagger: 0.045,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
            },
        });

        /* -------------------- VERTICAL GUIDE LINES -------------------- */
        gsap.fromTo(
            linesRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                transformOrigin: "top",
                duration: 1.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );

        /* -------------------- PINNED MARQUEE -------------------- */
        ScrollTrigger.create({
            trigger: ".marquee-wrapper",
            start: "top top",
            end: "+=120%",
            scrub: true,
        });

        gsap.to(".marquee-wrapper", {
            rotate: -5,
            x: -40,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            },
        });

        gsap.fromTo(
            ".marquee-wrapper",
            { scale: 0.92, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".marquee-wrapper",
                    start: "top 80%",
                    end: "top top",
                    scrub: true,
                },
            }
        );

        /* -------------------- FLOATING IMAGE (PARALLAX + IDLE) -------------------- */
        gsap.to(imageRef.current, {
            y: -140,
            rotateZ: 3,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(imageRef.current, {
            y: "+=14",
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        /* -------------------- IMAGE HOVER MICRO-INTERACTION -------------------- */
        imageRef.current.addEventListener("mouseenter", () => {
            gsap.to(imageRef.current, { scale: 1.1, duration: 0.4 });
        });

        imageRef.current.addEventListener("mouseleave", () => {
            gsap.to(imageRef.current, { scale: 1.05, duration: 0.4 });
        });
    }, []);

    return (
        <>
            {/* GRAIN OVERLAY */}
            <div className="pointer-events-none fixed inset-0 z-[998] opacity-[0.035] bg-[url('/grain.png')]" />

            {/* HERO SECTION */}
            <section
                ref={sectionRef}
                className="min-h-screen relative w-full bg-black text-white overflow-hidden flex flex-col justify-between"
            >
                {/* Vertical guide lines */}
                <div
                    ref={(el) => (linesRef.current[0] = el)}
                    className="absolute left-[6%] top-0 h-full w-px bg-white/20"
                />
                <div
                    ref={(el) => (linesRef.current[1] = el)}
                    className="absolute right-[6%] top-0 h-full w-px bg-white/20"
                />

                {/* MAIN CONTENT: TEXT LEFT / IMAGE RIGHT */}
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-6 mt-16 md:mt-32 gap-10 z-10">

                    {/* LEFT: Paragraph */}
                    <div ref={textRef} className="md:w-1/2 text-left pl-4">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                            Scalable, immersive digital experiences that merge
                            <span className="block opacity-60">
                              creativity with engineering precision
                            </span>
                        </h2>

                        <p className="mt-6 text-lg md:text-xl opacity-70 max-w-md">
                            I craft SaaS platforms, AI-powered systems, and interactive 3D web experiences
                            using Next.js, Node.js, WebGL, and modern frontend architecture.
                        </p>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="md:w-1/2 flex justify-center relative">
                        <img
                            ref={imageRef}
                            src={pic}
                            alt="Profile"
                            className="w-[280px] md:w-[420px] lg:w-[460px] rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.85)] pr-3"
                        />
                    </div>
                </div>

                {/* MARQUEE BELOW */}
                <div className="w-full mt-12 md:mt-20 px-6 overflow-hidden relative">
                    <div className="marquee-wrapperorigin-top-left">
                        <MarqueeComponent />
                    </div>
                </div>

                {/* AMBIENT GLOW */}

            </section>
        </>

    );
};
