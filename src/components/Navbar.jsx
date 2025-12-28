import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo_icon.png";

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-20 z-50 px-8">
            <div className="max-w-7xl mx-auto h-full flex items-center">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-auto rounded-xl bg-red-700"
                />
                {/*<div className='border-white'>*/}
                {/*    <div className="w-100  h-100 rounded-2xl overflow-hidden border-2 border-white mx-auto mt-[4rem]">*/}
                {/*        <img src={profile_pic} className="w-full h-full object-cover" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* Links */}
                <nav className="flex gap-7 ml-auto">
                    <Link className="text-2xl" to="/">Home</Link>
                    <Link className="text-2xl font-stone" to="/work">Work</Link>
                    <Link className="text-2xl " to="/skills">Skills</Link>
                    <Link
                        className="relative px-4 py-2 border rounded-full overflow-hidden group"
                        to="/contact"
                    >
                        <span className="relative z-10">Contact</span>
                        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-white" />
                    </Link>
                </nav>

            </div>
        </header>
    );
};

