import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MarqueeComponent from "./MarqueeComponent.jsx";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
    const refSection = useRef();
    const refMain = useRef();

    useGSAP(() => {
        gsap.fromTo(
            refMain.current,
            {
                width: "60vw",
                height: "40vh",
                top: "10%",
                left: "50%",
                x: "-50%",
                scale: 1,
                transformOrigin: "center center",
            },
            {
                width: "100vw",
                height: "100vh",
                top: 0,
                left: "50%",
                x: "-50%",
                // y:-700,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: refSection.current,
                    start: "top 60%",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                },
            }
        );
    });

    return (
        <section
            className="min-h-100 relative flex justify-center p-0"
            ref={refSection}
        >
            <section
                className="absolute backdrop-blur-2xl flex justify-center bg-amber-200 items-center overflow-hidden"
                ref={refMain}
            >
                <div className="absolute top-0">
                    <MarqueeComponent/>
                </div>

            </section>
        </section>
    );
};
