import { useRef } from "react";
import gsap from "gsap";

const chars = ["0", "1"];

export default function BinaryText({ text, className }) {
    const el = useRef(null);
    let original = text;

    const scramble = () => {
        let iterations = 0;

        gsap.to({}, {
            duration: 0.8,
            repeat: 1,
            onRepeat: () => iterations = 0,
            onUpdate: () => {
                el.current.innerText = original
                    .split("")
                    .map((char, i) => {
                        if (i < iterations) return original[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                iterations += 1 / 3;
            },
        });
    };

    const reset = () => {
        el.current.innerText = original;
        gsap.killTweensOf({});
    };

    return (
        <span
            ref={el}
            onMouseEnter={scramble}
            onMouseLeave={reset}
            className={className}
        >
            {text}
        </span>
    );
}
