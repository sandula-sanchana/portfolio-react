import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="w-full bg-white px-8 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left: Image / Logo */}
                <div className="images-div">
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Right: Links */}
                <nav className="flex gap-6">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/work" className="hover:text-blue-600 transition">Work</Link>
                    <Link to="/skills" className="hover:text-blue-600 transition">Skills</Link>
                </nav>

            </div>
        </header>
    );
};
