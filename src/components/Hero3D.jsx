import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import BinaryText from "./BinaryText.jsx";

export const Hero3D = () => {
    const textRef = useRef(null);
    const splineRef = useRef(null);
    const btnRef = useRef(null); // new ref for the button

    useGSAP(() => {
        gsap.from(textRef.current.children, {
            y: 60,
            opacity: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
        });

        gsap.from(splineRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
        });
    });

    useEffect(() => {
        if (!btnRef.current) return;

        // Continuous floating animation
        gsap.to(btnRef.current, {
            y: "+=5",
            rotation: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Hover shake
        const handleMouseEnter = () => {
            gsap.to(btnRef.current, {
                rotation: "+=5",
                x: "+=3",
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power1.inOut",
            });
        };

        btnRef.current.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            btnRef.current.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <section className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden">

            {/* vertical rails */}
            <div className="absolute left-[6%] top-0 h-full w-px bg-white/30" />
            <div className="absolute right-[6%] top-0 h-full w-px bg-white/30" />

            {/* 3D PORTRAIT */}
            <div
                ref={splineRef}
                className="absolute left-[12%] top-[16%]
                   w-[1620px] h-[740px]
                   rounded-2xl border border-white/30 overflow-hidden inset-0"
            >
                <Spline scene="https://prod.spline.design/LtW1ZRVgxJNmnIh9/scene.splinecode" />
            </div>

            {/* TEXT BLOCK */}
            <div
                ref={textRef}
                className="absolute right-[10%] top-[22%] text-right"
            >
                <p className="text-xs tracking-[0.35em] opacity-50 mb-6">
                    HI, I’M SANDULA SANCHANA
                </p>

                <h1 className="text-[8rem] leading-[0.88] font-extrabold tracking-tight">
                    <BinaryText text="STRATEGIC" /> <br />
                    <BinaryText text="SOFTWARE" /> <br />
                    <BinaryText text="ENGINEER" />
                </h1>

                <p className="text-sm tracking-[0.25em] uppercase opacity-60 mb-6">
                    Software Engineer · AI/ML Engineer
                </p>

                <div className="mt-10 mb-8 ml-auto w-32 h-px bg-white/20" />

                <p className="max-w-[420px] ml-auto text-lg opacity-75 leading-relaxed">
                    Building scalable software, intelligent systems,
                    and immersive UI experiences.
                </p>

                <div className="mt-12 flex justify-end gap-6">
                    <button
                        ref={btnRef} // attach the ref here
                        className="px-7 py-3 bg-lime-400 text-black font-semibold rounded-md"
                    >
                        Get in touch
                    </button>
                    <button className="px-7 py-3 border border-white/30 rounded-md">
                        See work
                    </button>
                </div>
            </div>
        </section>
    );
};
