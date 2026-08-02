import {useRef, useLayoutEffect, useState, useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CatTyping from "../components/Contact/CatTyping.jsx";
import { CONTACT_CONFIG, whatsappLink } from "../utils/contactConfig.js";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    { Icon: FaGithub, href: CONTACT_CONFIG.githubUrl, label: "GitHub" },
    { Icon: FaLinkedin, href: CONTACT_CONFIG.linkedinUrl, label: "LinkedIn" },
    { Icon: FaWhatsapp, href: whatsappLink(), label: "WhatsApp" },
];

export const ContactSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const iconsRef = useRef([]);

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    // status: idle | sending | success | error
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus("error");
            setErrorMsg("Please fill in every field.");
            return;
        }

        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: CONTACT_CONFIG.web3formsAccessKey,
                    subject: `New message from ${formData.name} (portfolio site)`,
                    from_name: formData.name,
                    ...formData,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error(data.message || "Something went wrong.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Couldn't send that — please try again.");
        }
    };

    const [showCat, setShowCat] = useState(false);

    useEffect(() => {
        // Check width initially
        const checkWidth = () => setShowCat(window.innerWidth > 1645);

        checkWidth();

        // Update on resize
        window.addEventListener("resize", checkWidth);

        // Cleanup
        return () => window.removeEventListener("resize", checkWidth);
    }, []);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* 🔥 Split text */
            const split = new SplitType(titleRef.current, {
                types: "lines, words",
            });

            /* TITLE REVEAL */
            gsap.from(split.words, {
                y: 120,
                rotateX: 90,
                opacity: 0,
                stagger: 0.04,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            /* FORM SLIDE */
            gsap.from(formRef.current, {
                x: -120,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                },
            });

            /* SOCIAL ICONS */
            gsap.from(iconsRef.current, {
                y: 80,
                opacity: 0,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen relative bg-black text-white px-6 md:px-20 py-24 flex flex-col justify-center overflow-hidden"
        >

            <div className="absolute left-[6%] top-0 h-full w-px bg-white/30" />
            <div className="absolute right-[6%] top-0 h-full w-px bg-white/30" />
            {/* TOP TITLE */}
            <h1
                ref={titleRef}
                className="text-[14vw] md:text-[7vw] font-extrabold leading-none uppercase"
            >
                Let’s Work
            </h1>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-16 mt-20 items-end relative">

                {/* FORM */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 max-w-md w-full"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className="bg-transparent border-b border-white/30 py-3 outline-none focus:border-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className="bg-transparent border-b border-white/30 py-3 outline-none focus:border-white"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        className="bg-transparent border-b border-white/30 py-3 outline-none focus:border-white resize-none"
                    />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-8 px-8 py-3 border border-white rounded-full w-fit hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "sending" ? "Sending…" : "Send Message →"}
                    </button>

                    {status === "success" && (
                        <p className="text-lime-400 text-sm">Thanks — your message is in! I'll get back to you soon.</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-sm">{errorMsg}</p>
                    )}
                </form>


                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-10 items-start md:items-end">

                    {/* SOCIALS */}
                    <div className="flex gap-8">
                        {socialLinks.map((social, i) => (
                            <a
                                key={social.label}
                                ref={(el) => (iconsRef.current[i] = el)}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-5xl relative group"
                            >
                                <social.Icon />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* BOTTOM TITLE */}
                    <h1 className="text-[14vw] md:text-[7vw] font-extrabold leading-none uppercase text-right">
                        Together
                    </h1>
                </div>
            </div>


            {showCat && (
                <div >
                    <CatTyping />
                </div>
            )}
        </section>
    );

};
