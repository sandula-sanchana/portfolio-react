import { useRef, useEffect } from "react";
import gsap from "gsap";

const CatTyping = () => {
    const catRef = useRef(null);

    useEffect(() => {
        gsap.to(catRef.current, {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <div
            ref={catRef}
            className="absolute top-20 right-20 w-68 select-none"
        >
            <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGcwMmhmN3Z2YzRyNnF4M2I5Y3diYXE0NmllNGM2bnQweWRnYWI5ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sthmCnCpfr8M8jtTQy/giphy.gif"
                alt="typing cat"
                className="w-full opacity-90"
            />
            <p className="text-center text-xs text-white/60 mt-2">
                yah it's me 😁
            </p>
        </div>
    );
};

export default CatTyping;
