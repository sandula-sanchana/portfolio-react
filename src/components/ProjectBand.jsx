import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const ProjectBand = ({ title, description, link, tech, image, color }) => {
    const bandRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);

    // Hover animations
    useLayoutEffect(() => {
        const band = bandRef.current;
        const imageEl = imageRef.current;
        const overlay = overlayRef.current;

        const enterAnim = () => {
            gsap.to(imageEl, {
                opacity: 1,
                scale: 1.05,
                duration: 0.5,
                ease: "power2.out",
            });
            gsap.to(overlay, { opacity: 0.2, duration: 0.5 });
        };

        const leaveAnim = () => {
            gsap.to(imageEl, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
            });
            gsap.to(overlay, { opacity: 0.1, duration: 0.5 });
        };

        band.addEventListener("mouseenter", enterAnim);
        band.addEventListener("mouseleave", leaveAnim);

        return () => {
            band.removeEventListener("mouseenter", enterAnim);
            band.removeEventListener("mouseleave", leaveAnim);
        };
    }, []);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            ref={bandRef}
            className="group relative block overflow-hidden py-12 px-6 mb-12 bg-gray-100 rounded-lg cursor-pointer w-full"
        >
            {/* Title & Description */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">{title}</h2>
                <span className="text-sm uppercase tracking-widest opacity-75">{description}</span>
            </div>

            {/* Tech Stack */}
            <div className="flex gap-4 mt-4 z-10 relative flex-wrap">
                {tech.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <t.icon className="text-xl" /> <span>{t.name}</span>
                    </div>
                ))}
            </div>

            {/* Single Image */}
            <div
                style={{ backgroundColor: color }}
                className="mt-6 flex justify-center relative z-10 rounded-md"
            >
                <img
                    ref={imageRef}
                    src={image}
                    alt={title}
                    className="object-cover w-[400px] h-[300px] rounded-md opacity-1"
                />
            </div>

            {/* Large overlay text */}
            <div
                ref={overlayRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <p className="text-6xl md:text-8xl font-black text-gray-700 opacity-10 select-none">
                    {title.toUpperCase()}
                </p>
            </div>
        </a>
    );
};

export default ProjectBand;
