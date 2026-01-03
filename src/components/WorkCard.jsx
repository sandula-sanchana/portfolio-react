import { useRef } from "react";
import gsap from "gsap";

export default function WorkCard({ project }) {
    const cardRef = useRef(null);

    // Only apply hover effect on devices larger than md
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

    const onMove = (e) => {
        if (!isDesktop) return; // skip on mobile
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
        if (!isDesktop) return; // skip on mobile
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
            className={`
        work-card perspective
        w-[clamp(260px,90vw,520px)]
        h-[clamp(300px,60vw,650px)]
        max-md:mx-auto max-md:mb-6
      `}
        >
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900">
                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="
            absolute inset-0 w-full h-full object-cover
            scale-110 transition-transform duration-[1200ms]
            ease-[cubic-bezier(.19,1,.22,1)]
            hover:scale-125
            max-md:hover:scale-110
          "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute bottom-6 left-4 right-4">
                    <h3 className="text-[clamp(1rem,5vw,2.5rem)] uppercase mb-2">
                        {project.title}
                    </h3>
                    <p className="text-white/70 text-[clamp(0.7rem,3vw,1rem)]">
                        {project.description}
                    </p>

                    <div className="mt-4 flex gap-2 flex-wrap">
                        {project.tech.map((tech, index) => (
                            <span
                                key={`${project.title}-${tech.name}-${index}`}
                                className="
                  px-3 py-1 text-[clamp(0.5rem,2vw,0.8rem)]
                  uppercase tracking-wide
                  border border-white/20
                  rounded-full flex items-center gap-2
                "
                            >
                {tech.icon && <tech.icon className="text-[clamp(0.6rem,2vw,1rem)]" />}
                                {tech.name}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
