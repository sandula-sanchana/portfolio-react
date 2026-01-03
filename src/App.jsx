import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // ✅ Imported useLocation
import { Home } from "./pages/Home.jsx";
import SkillsPage from "./pages/Skillspage.jsx";
import { ContactSection } from "./pages/ContactSection.jsx";
import { Navbar } from "./components/Navbar.jsx";
import RouteLoader from "./components/RouteLoader.jsx";
import ProjectSection from "./pages/ProjectSection.jsx";


function Loader({ onComplete }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 1000;
        const steps = 100;
        const intervalTime = duration / steps;

        let current = 0;
        const interval = setInterval(() => {
            current++;
            setCount(current);
            if (current >= 100) {
                clearInterval(interval);
                onComplete?.();
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 flex items-center justify-start bg-black text-white text-9xl z-[9999]">
            <div className='m-6'>
                {count}%
            </div>

        </div>
    );
}

function path(pathName){
   switch (pathName){
       case "/": return "HOME";
       case "/work": return "WORK";
       case "/skills": return "SKILLS";
       case "/contact": return "CONTACT";
       default: return "";
   }
}

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    console.log(location.pathname);
    return (
        <>

            {loading && <Loader onComplete={() => setLoading(false)} />}

            {!loading && (
                <>
                    <Navbar />

                    <RouteLoader key={location.pathname} pathName={path(location.pathname)}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/work" element={<ProjectSection/>} />
                            <Route path="/skills" element={<SkillsPage />} />
                            <Route path="/contact" element={<ContactSection />} />
                        </Routes>
                    </RouteLoader>
                </>
            )}
        </>
    );
}

export default App;