import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SkillsRow = ({ skills }) => (
    <div className="flex items-center gap-14">
        {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3">
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                    draggable={false}
                />
                <span className="font-bold uppercase text-black">
                    {skill.name}
                </span>
                <span className="text-lime-400 text-2xl">✦</span>
            </div>
        ))}
    </div>
);

export default function SkillsMarquee({ skills, speed = 12 }) {
    const track = useRef(null);

    useGSAP(() => {
        const images = track.current.querySelectorAll("img");

        // Wait until ALL images are loaded
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
            gsap.to(track.current, {
                xPercent: -50,
                repeat: -1,
                duration: speed,
                ease: "linear",
            });
        });
    }, []);

    return (
        <div className="overflow-hidden w-full py-8 bg-neutral-100">
            <div
                ref={track}
                className="flex w-max whitespace-nowrap gap-14 text-[2.8vw]"
            >
                <SkillsRow skills={skills} />
                <SkillsRow skills={skills} />
            </div>
        </div>
    );
}
