import {Hero3D} from "../components/Hero3D.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {AboutSection} from "../components/AboutSection.jsx";


export const Home=()=>{


    return (
        <main className="">
            <Navbar/>
            <Hero3D/>
            <AboutSection/>
        </main>
    )
}