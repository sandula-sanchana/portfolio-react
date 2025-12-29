import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function MarqueeText() {
    return (
        <div className="flex items-center gap-12">
            <span className="text-black">FULL-STACK DEVELOPER</span>
            <span className="text-lime-400">✦</span>
            <span className="text-black">SOFTWARE ENGINEER</span>
            <span className="text-lime-400">✦</span>
            <span className="text-black">UI / UX DESIGNER</span>
            <span className="text-lime-400">✦</span>
            <span className="text-black">AI/ML ENGINEER</span>
            <span className="text-lime-400">✦</span>
        </div>
    );
}

export default function MarqueeComponent() {
    const track = useRef(null);

    useGSAP(() => {
        gsap.to(track.current, {
            xPercent: -50,
            repeat: -1,
            duration: 10,
            ease: "linear",
        });
    }, { scope: track });


    return (
        <div className="overflow-hidden w-full bg-neutral-100 py-10 z-50 sticky">
            <div
                ref={track}
                className="flex w-max whitespace-nowrap gap-12 text-[8vw] font-bold tracking-tight"
            >
                <MarqueeText />
                <MarqueeText />
            </div>
        </div>
    );
}
