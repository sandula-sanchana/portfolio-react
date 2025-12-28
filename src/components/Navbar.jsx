import { Link } from "react-router-dom";
import logo from "../assets/logo/logo_icon.png";

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50
                           backdrop-blur-lg bg-black/20">
            <div className="max-w-7xl mx-auto h-20 flex items-center px-8">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <span className="text-white font-semibold tracking-wide">
                        Sandula
                    </span>
                </div>

                {/* Links */}
                <nav className="ml-auto flex gap-10 text-sm tracking-widest uppercase">
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/">Home</Link>
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/work">Work</Link>
                    <Link className="opacity-70 hover:opacity-100 transition text-white" to="/skills">Skills</Link>
                    <Link
                        className="border border-white/40 px-4 py-2 rounded-full text-white
                                   hover:bg-white hover:text-black transition"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {/* subtle bottom divider */}
            <div className="h-px bg-white/10 w-full" />
        </header>
    );
};
