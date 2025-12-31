import { useRef } from "react";
import gsap from "gsap";

const SkillCard = ({ name, icon }) => {
    const cardRef = useRef(null);

    const onEnter = () => {
        gsap.to(cardRef.current, {
            scale: 1.1,
            rotateX: 8,
            rotateY: -8,
            boxShadow: "0 0 30px rgba(99,102,241,0.6)",
            duration: 0.3,
            ease: "power3.out"
        });
    };

    const onLeave = () => {
        gsap.to(cardRef.current, {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power3.out"
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="w-28 h-28 bg-[#0b0f1a] rounded-2xl flex flex-col items-center justify-center cursor-pointer border border-white/10"
            style={{ transformStyle: "preserve-3d" }}
        >
            <img src={icon} alt={name} className="w-10 h-10 mb-2" />
            <p className="text-xs text-white/80">{name}</p>
        </div>
    );
};

export default SkillCard;
