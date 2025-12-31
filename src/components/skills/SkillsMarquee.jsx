import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { memo, useRef } from "react";

// Memoized row for performance
const SkillsRow = memo(({ skills }) => (
    <div className="flex items-center gap-14">
        {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" draggable={false} />
                <span className="font-bold uppercase text-black">{skill.name}</span>
                <span className="text-lime-400 text-2xl">✦</span>
            </div>
        ))}
    </div>
));

export default function SkillsMarquee({ skills, speed = 12, reverse = false }) {
    const track = useRef(null);
    const cloneRef = useRef(null); // store clone for cleanup

    useGSAP(() => {
        const trackEl = track.current;
        if (!trackEl) return;

        const originalContent = trackEl.firstChild;
        if (!originalContent) return;

        // Clone the content once and store reference
        const clone = originalContent.cloneNode(true);
        cloneRef.current = clone;
        trackEl.appendChild(clone);

        // Wait for all images to load
        const images = trackEl.querySelectorAll("img");
        Promise.all(
            [...images].map(
                img =>
                    img.complete
                        ? Promise.resolve()
                        : new Promise(res => {
                            img.onload = res;
                            img.onerror = res;
                        })
            )
        ).then(() => {
            const contentWidth = originalContent.offsetWidth;
            const startX = reverse ? -contentWidth : 0;
            const endX = reverse ? 0 : -contentWidth;

            gsap.set(trackEl, { x: startX });
            gsap.to(trackEl, {
                x: endX,
                repeat: -1,
                duration: speed,
                ease: "linear",
            });
        });

        // Cleanup
        return () => {
            gsap.killTweensOf(trackEl);
            if (cloneRef.current && trackEl.contains(cloneRef.current)) {
                trackEl.removeChild(cloneRef.current);
            }
        };
    }, []); // run only once

    return (
        <div className="overflow-hidden w-full py-8 bg-neutral-100">
            <div
                ref={track}
                className="flex whitespace-nowrap gap-14 text-[2.8vw]"
                style={{ willChange: "transform" }} // smoother animation
            >
                <SkillsRow skills={skills} />
            </div>
        </div>
    );
}
