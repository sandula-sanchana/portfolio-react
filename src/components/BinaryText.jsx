import { useRef } from "react";
import gsap from "gsap";

const chars = ["0", "1"];

export default function BinaryText({ text, className }) {
    const el = useRef(null);
    const tweenRef = useRef(null); // store tween to kill later
    const original = text;

    const scramble = () => {
        if (!el.current) return; // guard against null

        let iterations = 0;

        // Kill any previous tween
        if (tweenRef.current) tweenRef.current.kill();

        tweenRef.current = gsap.to({}, {
            duration: 0.8,
            repeat: 1,
            onRepeat: () => (iterations = 0),
            onUpdate: () => {
                if (!el.current) return; // safe guard
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
        if (!el.current) return;
        el.current.innerText = original;
        if (tweenRef.current) tweenRef.current.kill();
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
