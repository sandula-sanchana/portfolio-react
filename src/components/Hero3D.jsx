import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Hero3D = () => {
    const textRef = useRef(null);
    const splineRef = useRef(null);

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

    return (
        <section className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden">

            {/* Vertical grid lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[8%] top-0 h-full w-px bg-white/10" />
                <div className="absolute right-[8%] top-0 h-full w-px bg-white/10" />
            </div>

            <div className="max-w-7xl mx-auto h-screen grid grid-cols-2 items-center px-10">

                {/* LEFT — 3D replaces profile pic */}
                <div
                    ref={splineRef}
                    className="relative w-[420px] h-[520px] rounded-2xl border border-white/20 overflow-hidden"
                >
                    <Spline scene="https://prod.spline.design/LtW1ZRVgxJNmnIh9/scene.splinecode" />
                </div>

                {/* RIGHT — Text */}
                <div ref={textRef} className="text-right">
                    <p className="text-sm tracking-widest opacity-60 mb-4">
                        Hi, I’m Sandula Sanchana
                    </p>

                    <h1 className="text-[6rem] leading-[0.95] font-extrabold">
                        STRATEGIC
                        <br />
                        SOFTWARE
                        <br />
                        ENGINEER
                    </h1>

                    <p className="mt-8 max-w-md ml-auto text-lg opacity-80">
                        Building scalable software, intelligent systems,
                        and immersive UI experiences.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex justify-end gap-4">
                        <button className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-md">
                            Get in touch
                        </button>
                        <button className="px-6 py-3 border border-white/30 rounded-md">
                            See work
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
