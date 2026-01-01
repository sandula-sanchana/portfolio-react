import { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Workpage } from "./pages/Workpage.jsx";
import SkillsPage from "./pages/Skillspage.jsx";
import { ContactSection } from "./pages/ContactSection.jsx";
import { Loader } from "./components/loader/Loader.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {/* Loader on top */}
            {loading && <Loader />}

            {/* Navbar only shows after loading */}
            {!loading && <Navbar />}

            <Routes>
                <Route path="/" element={<Home onLoaded={() => setLoading(false)} />} />
                <Route path="/work" element={<Workpage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contact" element={<ContactSection />} />
            </Routes>
        </>
    );
}

export default App;
