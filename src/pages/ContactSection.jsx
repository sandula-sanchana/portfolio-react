import {useRef, useLayoutEffect, useState, useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CatTyping from "../components/Contact/CatTyping.jsx";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const iconsRef = useRef([]);


    const [showCat, setShowCat] = useState(false);

    useEffect(() => {
        // Check width initially
        const checkWidth = () => setShowCat(window.innerWidth > 1645);

        checkWidth();

        // Update on resize
        window.addEventListener("resize", checkWidth);

        // Cleanup
        return () => window.removeEventListener("resize", checkWidth);
    }, []);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* 🔥 Split text */
            const split = new SplitType(titleRef.current, {
                types: "lines, words",
            });

            /* TITLE REVEAL */
            gsap.from(split.words, {
                y: 120,
                rotateX: 90,
                opacity: 0,
                stagger: 0.04,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            /* FORM SLIDE */
            gsap.from(formRef.current, {
                x: -120,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                },
            });

            /* SOCIAL ICONS */
            gsap.from(iconsRef.current, {
                y: 80,
                opacity: 0,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen relative bg-black text-white px-6 md:px-20 py-24 flex flex-col justify-center overflow-hidden"
        >
            {/* TOP TITLE */}
            <h1
                ref={titleRef}
                className="text-[14vw] md:text-[7vw] font-extrabold leading-none uppercase"
            >
                Let’s Work
            </h1>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-16 mt-20 items-end relative">

                {/* FORM */}
                <form
                    ref={formRef}
                    className="flex flex-col gap-6 max-w-md w-full"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-transparent border-b border-white/30 py-3 outline-none focus:border-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-transparent border-b border-white/30 py-3 outline-none focus:border-white"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="bg-transparent border-b border-white/30 py-3 outline-none focus:border-white resize-none"
                    />

                    <button
                        type="submit"
                        className="mt-8 px-8 py-3 border border-white rounded-full w-fit hover:bg-white hover:text-black transition-all"
                    >
                        Send Message →
                    </button>
                </form>


                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-10 items-start md:items-end">

                    {/* SOCIALS */}
                    <div className="flex gap-8">
                        {[FaGithub, FaLinkedin, FaWhatsapp].map((Icon, i) => (
                            <a
                                key={i}
                                ref={(el) => (iconsRef.current[i] = el)}
                                href="#"
                                className="text-5xl relative group"
                            >
                                <Icon />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* BOTTOM TITLE */}
                    <h1 className="text-[14vw] md:text-[7vw] font-extrabold leading-none uppercase text-right">
                        Together
                    </h1>
                </div>
            </div>


            {showCat && (
                <div >
                    <CatTyping />
                </div>
            )}
        </section>
    );

};
