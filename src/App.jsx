// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Workpage } from "./pages/Workpage.jsx";
import SkillsPage from "./pages/Skillspage.jsx";
import { ContactSection } from "./pages/ContactSection.jsx";

function Loader({ onComplete }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 1000; // 1 second
        const steps = 100; // count to 100
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
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-3xl">
            {count}%
        </div>
    );
}

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <Loader onComplete={() => setLoading(false)} />}

            {!loading && (
                <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Workpage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/contact" element={<ContactSection />} />
                    </Routes>
                </>
            )}
        </>
    );
}

export default App;
