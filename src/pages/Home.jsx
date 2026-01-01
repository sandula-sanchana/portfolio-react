import { Hero3D } from "../components/Hero3D.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ContactSection } from "./ContactSection.jsx";

export const Home = ({ onLoaded }) => {
    return (
        <main>
            {/* Pass onLoaded directly to Hero3D */}
            <Hero3D onLoaded={onLoaded} />
            <AboutSection />
            <ContactSection />
        </main>
    );
};
