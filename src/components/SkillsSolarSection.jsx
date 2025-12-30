import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaJava } from "react-icons/fa";
import { SiHibernate, SiSpringboot, SiNextdotjs } from "react-icons/si";
import gsap from "gsap";

export default function SkillsConstellation() {
    const containerRef = useRef(null);

    const hub = { cx: 450, cy: 300 };
    const radius = 250;

    const skillNames = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiHibernate />, name: "Hibernate" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaGithub />, name: "GitHub" },
    ];

    const total = skillNames.length;

    // Calculate positions
    const skills = skillNames.map((skill, i) => {
        const angle = (i / total) * 2 * Math.PI;
        return {
            ...skill,
            cx: hub.cx + radius * Math.cos(angle),
            cy: hub.cy + radius * Math.sin(angle),
        };
    });

    useEffect(() => {
        gsap.from(".skill-icon", {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "back.out(1.7)",
        });

        gsap.fromTo(
            ".line",
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" }
        );

        gsap.to(".skill-icon", {
            y: "+=10",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
            {/* SVG Lines */}
            <svg className="absolute w-full h-full top-0 left-0 -z-10">
                {skills.map((skill, i) => (
                    <path
                        key={i}
                        d={`M${hub.cx},${hub.cy} C${(hub.cx + skill.cx) / 2},${
                            hub.cy - 80
                        } ${(hub.cx + skill.cx) / 2},${skill.cy + 80} ${skill.cx},${skill.cy}`}
                        stroke="cyan"
                        strokeWidth="2"
                        fill="transparent"
                        className="line"
                    />
                ))}
            </svg>

            {/* Central Hub */}
            <div
                className="absolute w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ left: hub.cx - 48, top: hub.cy - 48 }}
            >
                Me
            </div>

            {/* Skills */}
            {skills.map((skill, i) => (
                <div
                    key={i}
                    className="absolute skill-icon flex flex-col items-center"
                    style={{ left: skill.cx - 32, top: skill.cy - 32 }}
                >
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 hover:shadow-[0_0_20px_cyan] transition-all duration-300">
                        {skill.icon}
                    </div>
                    <span className="text-white mt-2 text-sm text-center">{skill.name}</span>
                </div>
            ))}
        </div>
    );
}
