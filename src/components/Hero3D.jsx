import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import BinaryText from "./BinaryText.jsx";

export const Hero3D = ({ onLoaded }) => {
    const textRef = useRef(null);
    const splineRef = useRef(null);
    const btnRef = useRef(null);
    const dotRef = useRef(null);

    const animationDone = useRef(false);
    const splineLoaded = useRef(false);
    const called = useRef(false);

    // Function to check if both Spline and text animations are finished
    const statusCheck = () => {
        if (animationDone.current && splineLoaded.current && !called.current) {
            called.current = true;
            onLoaded?.(); // now loader disappears **after animations**
        }
    };

    useEffect(() => {
        // Animate text
        if (textRef.current) {
            gsap.from(textRef.current.children, {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 1.8, // slower so you can see it
                ease: "power4.out",
                onComplete: () => {
                    animationDone.current = true;
                    statusCheck();
                },
            });
        } else {
            animationDone.current = true;
            statusCheck();
        }

        // Animate Spline
        if (splineRef.current) {
            gsap.from(splineRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 2, // slower too
                ease: "power3.out",
                onComplete: () => {
                    splineLoaded.current = true;
                    statusCheck();
                },
            });
        }
    }, []);

    // Dot scroll animation
    useEffect(() => {
        if (dotRef.current) {
            gsap.fromTo(
                dotRef.current,
                { y: 6, opacity: 0 },
                {
                    y: 18,
                    opacity: 1,
                    duration: 1.2,
                    repeat: -1,
                    ease: "power1.inOut",
                }
            );
        }
    }, []);

    // Button floating + hover shake
    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const floatAnim = gsap.to(btn, {
            y: "+=5",
            rotation: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        const handleMouseEnter = () => {
            gsap.to(btn, {
                rotation: "+=5",
                x: "+=3",
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power1.inOut",
            });
        };

        btn.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            btn.removeEventListener("mouseenter", handleMouseEnter);
            floatAnim.kill();
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
                <div className="absolute left-[6%] top-0 bottom-0 h-3/4 w-px bg-white/30 z-50" />

                <div className='z-50 absolute left-[5.5%] bottom-[5%] flex flex-col gap-6'>
                    <svg role="img" className="hover:-translate-y-1 transition-transform duration-300 cursor-pointer" viewBox="0 0 24 24" width='20' fill='white' xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <svg role="img" className="hover:-translate-y-1 transition-transform duration-300 cursor-pointer" viewBox="0 0 24 24" width='20' fill='white' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    <svg role="img" className="hover:-translate-y-1 transition-transform duration-300 cursor-pointer" viewBox="0 0 24 24" width='20' fill='white' xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white select-none">
                    <div className="w-6 h-10 border border-white/70 rounded-full flex justify-center pt-2">
                        <span ref={dotRef} className="w-1 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-[10px] tracking-widest opacity-70">SCROLL</span>
                </div>

                <Spline
                    scene="https://prod.spline.design/LtW1ZRVgxJNmnIh9/scene.splinecode"
                    onLoad={() => {
                        splineLoaded.current = true;
                        statusCheck();
                    }}
                />
            </div>

            {/* TEXT BLOCK */}
            <div ref={textRef} className="absolute right-[10%] top-[22%] text-right">
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
                    Building scalable software, intelligent systems, and immersive UI
                    experiences.
                </p>

                <div className="mt-12 flex justify-end gap-6">
                    <button
                        ref={btnRef}
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
