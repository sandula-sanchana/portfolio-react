import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MarqueeComponent from "./MarqueeComponent.jsx";

import pic from "../assets/pic.jpg";


gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const linesRef = useRef([]);
    const imageRef = useRef(null);

    useGSAP(() => {
        // TEXT REVEAL
        gsap.fromTo(
            textRef.current,
            { y: 60, opacity: 0, filter: "blur(10px)" },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.6,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            }
        );

        // VERTICAL LINES GROW
        gsap.fromTo(
            linesRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                transformOrigin: "top",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );

        // PINNED MARQUEE
        ScrollTrigger.create({
            trigger: ".marquee-wrapper",
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: true,
        });

        // FLOATING IMAGE
        gsap.to(imageRef.current, {
            y: -120,
            rotate: 2,
            ease: "none",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <>
            {/* HERO ABOUT */}
            <section
                ref={sectionRef}
                className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden"
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

                <div
                    ref={textRef}
                    className="max-w-4xl text-center px-6 relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                        Scalable, immersive digital experiences that merge
                        <span className="block opacity-60">
                            creativity with engineering precision
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
                        I craft SaaS platforms, AI-powered systems, and
                        interactive 3D experiences using Next.js, Node.js,
                        and WebGL technologies.
                    </p>
                </div>

                {/* Ambient glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
            </section>

            {/* MARQUEE STORY SECTION */}
            <section className="relative h-[200vh] bg-black">
                <div className="marquee-wrapper h-screen flex items-center overflow-hidden bg-neutral-950">
                    <MarqueeComponent />
                </div>

                {/* FLOATING IMAGE */}
                <div className="relative h-screen flex items-center justify-center">
                    <img
                        ref={imageRef}
                        src={pic}
                        alt=""
                        className="w-[380px] md:w-[480px] rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
                    />
                </div>
            </section>
        </>
    );
};
