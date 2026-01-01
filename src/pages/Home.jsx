import {Hero3D} from "../components/Hero3D.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {AboutSection} from "../components/AboutSection.jsx";
import {ContactSection} from "./ContactSection.jsx";
import Skillspage from "./Skillspage.jsx";


export const Home=()=>{


    return (
        <main className="">
            <Hero3D/>
            <AboutSection/>
            <ContactSection/>
        </main>
    )
}