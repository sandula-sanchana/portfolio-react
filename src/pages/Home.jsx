import {Hero3D} from "../components/Hero3D.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {AboutSection} from "../components/AboutSection.jsx";
import SkillsSolarSection from "../components/SkillsSolarSection.jsx";


export const Home=()=>{


    return (
        <main className="">
            <Hero3D/>
            <AboutSection/>
            <SkillsSolarSection/>
        </main>
    )
}