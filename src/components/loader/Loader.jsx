import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Loader = () => {
    const loaderRef = useRef(null);

    useEffect(() => {
        // Optional: animate loader in/out
        gsap.from(loaderRef.current, { opacity: 0, duration: 0.5 });
    }, []);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        >
            <h1 className="text-white text-3xl">Loading...</h1>
        </div>
    );
};
