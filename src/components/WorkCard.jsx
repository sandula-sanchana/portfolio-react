import { useRef } from "react";
import gsap from "gsap";

export default function WorkCard({ project }) {
    const cardRef = useRef(null);

    const onMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotX = ((y / rect.height) - 0.5) * 10;
        const rotY = ((x / rect.width) - 0.5) * 10;

        gsap.to(cardRef.current, {
            rotationX: -rotX,
            rotationY: rotY,
            scale: 1.05,
            duration: 0.4,
            ease: "power3.out",
        });
    };

    const onLeave = () => {
        gsap.to(cardRef.current, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.6,
            ease: "expo.out",
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="work-card w-[520px] h-[650px] perspective"
        >
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-[1200ms] ease-[cubic-bezier(.19,1,.22,1)] hover:scale-125"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-4xl uppercase mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.description}</p>

                    <div className="mt-6 flex gap-2 flex-wrap">
                        {project.tech.map((tech, index) => (
                            <span
                                key={`${project.title}-${tech.name}-${index}`}
                                className="px-3 py-1 text-xs uppercase tracking-wide border border-white/20 rounded-full flex items-center gap-2"
                            >
    {tech.icon && <tech.icon className="text-sm" />}
                                {tech.name}
  </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
