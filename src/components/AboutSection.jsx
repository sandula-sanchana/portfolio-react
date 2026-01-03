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

    const ageBadgeRef = useRef(null);
    const spotifyBadgeRef = useRef(null);


    useGSAP(() => {



        /* -------------------- FLOATING BADGES -------------------- */
        const floatBadge = (el, delay = 0) => {
            gsap.to(el, {
                y: "+=18",
                rotation: "+=2",
                duration: 3.4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay,
            });
        };

        floatBadge(ageBadgeRef.current, 0);
        floatBadge(spotifyBadgeRef.current, 0.8);

        /* subtle parallax with scroll */
        gsap.to([ageBadgeRef.current, spotifyBadgeRef.current], {
            y: -60,
            ease: "none",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });


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

        gsap.fromTo(
            ".marquee-wrapper",
            { scale: 0.92, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".marquee-wrapper",
                    start: "top 90%",
                    end: "bottom bottom",
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

                        {/* AGE BADGE */}
                        <div
                            ref={ageBadgeRef}
                            className="
            absolute
            right-167
            top-[18%]
            rotate-[-10deg]
            z-20
            backdrop-blur-md
            bg-white/10
            border border-white/30
            rounded-xl
            px-4 py-3
            shadow-lg
            max-lg:hidden
        "
                        >
                            <div className="text-3xl font-bold leading-none">21</div>
                        </div>

                        {/* SPOTIFY BADGE */}
                        <div
                            ref={spotifyBadgeRef}
                            className="
            absolute
            right-25
            bottom-[22%]
            rotate-[8deg]
            z-20
            flex items-center gap-3
            backdrop-blur-md
            bg-white/10
            border border-white/30
            rounded-xl
            px-4 py-3
            shadow-lg
            cursor-pointer
            hover:scale-105 transition-transform
            max-lg:hidden
        "
                        >
                            {/* Spotify Icon */}
                            <svg
                                viewBox="0 0 24 24"
                                width="22"
                                fill="#1DB954"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm5.478 17.49c-.215.34-.67.447-1.01.232-2.77-1.69-6.26-2.075-10.36-1.15-.385.092-.77-.14-.862-.524-.093-.385.14-.77.524-.862 4.46-1.01 8.29-.57 11.38 1.31.34.215.447.67.232 1.01zm1.44-3.198c-.27.432-.84.57-1.27.3-3.17-1.95-8.01-2.52-11.77-1.38-.486.146-.996-.13-1.14-.616-.145-.486.13-.996.616-1.14 4.29-1.29 9.63-.65 13.31 1.63.43.27.57.84.3 1.27zm.12-3.33C15.29 8.62 7.87 8.45 4.34 9.5c-.578.173-1.188-.157-1.36-.735-.172-.578.157-1.188.735-1.36 4.06-1.21 12.02-.97 16.3 1.53.53.31.71.99.4 1.52-.31.53-.99.71-1.52.4z"/>
                            </svg>

                            <div className="flex flex-col leading-tight">
                                <span className="text-xs opacity-60 tracking-wider">SPOTIFY</span>
                                <span className="text-sm font-semibold">My Playlist</span>
                            </div>
                        </div>

                        {/* PROFILE IMAGE */}
                        <img
                            ref={imageRef}
                            src={pic}
                            alt="Profile"
                            className="w-[280px] md:w-[420px] lg:w-[460px]
                   rounded-2xl
                   shadow-[0_40px_120px_rgba(0,0,0,0.85)]
                   pr-3
                   relative z-10 mt-6"
                        />
                    </div>

                </div>

                {/* MARQUEE BELOW */}
                <div className="w-full mt-6 md:mt-20 px-6 overflow-hidden relative">
                    <div className="marquee-wrapper origin-top-left">
                        <MarqueeComponent />
                    </div>
                </div>

                {/* AMBIENT GLOW */}

            </section>
        </>

    );
};
