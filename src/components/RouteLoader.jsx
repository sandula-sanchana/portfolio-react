import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const RouteLoader = ({ children, pathName }) => {
    const [loading, setLoading] = useState(true);
    const circleRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setLoading(false), // remove circle after animation
        });

        tl.fromTo(
            circleRef.current,
            { y: 0, scale: 1 },
            { y: "-120%", scale: 1.1, duration: 0.8, ease: "power2.inOut" }
        );

        return () => tl.kill();
    }, [pathName]);

    return (
        <>
            {/* Always render the page content */}
            {children}

            {/* Circle overlay */}
            {loading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none">
                    <div
                        ref={circleRef}
                        className={`rounded-full w-[250vw] h-[250vw] flex items-center justify-center ${pathName==='SKILLS'?"bg-black" : "bg-white"}`}
                    >
                       <span
                           className={`text-4xl font-bold select-none tracking-widest ${
                               pathName === "SKILLS" ? "text-white" : "text-black"
                           }`}
                       >
                               {pathName || "LOADING"}
                       </span>

                    </div>
                </div>
            )}
        </>
    );
};

export default RouteLoader;
