import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo_icon.png";

export const Navbar = () => {
    return (
        <header className="w-full h-20 bg-white px-8">
            <div className="max-w-7xl mx-auto h-full flex items-center">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-auto rounded-xl bg-red-700"
                />

                {/* Links */}
                <nav className="flex gap-6 ml-auto mt-[10px]">
                    <Link className="text-2xl">Home</Link>
                    <Link className="text-3xl font-stone">Work</Link>
                    <Link className="text-2xl">Skills</Link>
                    <div className="border">
                        <Link className="text-3xl font-stone font-bold">Contact</Link>
                    </div>

                </nav>

            </div>
        </header>
    );
};
