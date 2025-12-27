import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo_icon.png";

export const Navbar = () => {
    return (
        <header className="w-full h-20 bg-white px-8">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-auto bg-red-500 rounded-xl"
                />

                {/* Links */}
                <nav className="flex gap-6">
                    <Link to="/" className="">Home</Link>
                    <Link to="/work" className="">Work</Link>
                    <Link to="/skills" className="">Skills</Link>
                </nav>

            </div>
        </header>
    );
};
