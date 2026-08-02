import { memo } from "react";

// Memoized row for performance
const SkillsRow = memo(({ skills }) => (
    <div className="flex items-center gap-14 shrink-0">
        {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 shrink-0" draggable={false} />
                <span className="font-bold uppercase text-black whitespace-nowrap">{skill.name}</span>
                <span className="text-lime-400 text-2xl shrink-0">✦</span>
            </div>
        ))}
    </div>
));

export default function SkillsMarquee({ skills, speed = 12, reverse = false, bg = "bg-neutral-100" }) {
    return (
        <div className={`overflow-hidden w-full py-8 ${bg}`}>
            {/*
              Two copies of the row sit side by side inside a track sized to its
              own content (w-max). Animating the track by exactly -50% of its
              width loops the two copies seamlessly, no JS width measurement
              or DOM cloning needed.
            */}
            <div
                className="flex w-max gap-14 text-[2.8vw]"
                style={{
                    animation: `${reverse ? "marquee-reverse" : "marquee-forward"} ${speed}s linear infinite`,
                }}
            >
                <SkillsRow skills={skills} />
                <SkillsRow skills={skills} />
            </div>
        </div>
    );
}
