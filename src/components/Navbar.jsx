import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import logo from "../assets/logo/logo_icon.png";
import BinaryText from "./BinaryText.jsx";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

export const Navbar = () => {
    const contactRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

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

    // Animate mobile menu
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (menuOpen) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: "100%",
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [menuOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20">
            <div className="max-w-7xl mx-auto h-20 flex items-center px-8 justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-auto bg-red-700" />
                    <span className="text-white font-semibold tracking-wide">Sandula</span>
                </div>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/">
                        <BinaryText text="HOME" />
                    </Link>
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/work">
                        <BinaryText text="WORK" />
                    </Link>
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/skills">
                        <BinaryText text="SKILLS" />
                    </Link>
                    <Link
                        className="border border-white/40 px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
                        to="/contact"
                        ref={contactRef}
                    >
                        <BinaryText text="CONTACT ME 😎" />
                    </Link>
                </nav>

                {/* Hamburger Icon */}
                <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-3/4 bg-black/90 backdrop-blur-lg flex flex-col gap-10 p-8 transform translate-x-full md:hidden z-40"
            >
                <Link className="text-white text-lg" to="/" onClick={() => setMenuOpen(false)}>
                    <BinaryText text="HOME" />
                </Link>
                <Link className="text-white text-lg" to="/work" onClick={() => setMenuOpen(false)}>
                    <BinaryText text="WORK" />
                </Link>
                <Link className="text-white text-lg" to="/skills" onClick={() => setMenuOpen(false)}>
                    <BinaryText text="SKILLS" />
                </Link>
                <Link
                    className="border border-white/40 px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                >
                    <BinaryText text="CONTACT ME 😎" />
                </Link>
            </div>

            <div className="h-px bg-white/30 w-full" />
        </header>
    );
};
