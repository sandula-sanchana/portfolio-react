import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/logo/logo_icon.png";
import BinaryText from "./BinaryText.jsx";

export const Navbar = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        if (!contactRef.current) return;

        // Floating animation
        gsap.to(contactRef.current, {
            y: "+=5",
            rotation: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Hover shake
        const handleMouseEnter = () => {
            gsap.to(contactRef.current, {
                rotation: "+=5",
                x: "+=3",
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power1.inOut",
            });
        };

        contactRef.current.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            contactRef.current.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);
    return (
        <header className="fixed top-0 left-0 w-full z-50
                           backdrop-blur-lg bg-black/20">
            <div className="max-w-7xl mx-auto h-20 flex items-center px-8">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-auto bg-red-700" />
                    <span className="text-white font-semibold tracking-wide">
                        Sandula
                    </span>
                </div>

                {/* Links */}
                <nav className="ml-auto flex gap-10 text-sm tracking-widest uppercase">
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/"> <BinaryText text="HOME" /></Link>
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/work"> <BinaryText text="WORK" /></Link>
                    {/*<Link className="opacity-70 hover:opacity-100 transition text-white" to="/skills"> <BinaryText text="SKILLS" /></Link>*/}
                    {/*<Link*/}
                    {/*    className="border border-white/40 px-4 py-2 rounded-full text-white*/}
                    {/*               hover:bg-white hover:text-black transition"*/}
                    {/*    to="/contact" ref={contactRef}*/}
                    {/*>*/}
                    {/*    <BinaryText text="CONTACT ME 😎" />*/}
                    {/*</Link>*/}
                </nav>
            </div>


            <div className="h-px bg-white/30 w-full" />
        </header>
    );
};
