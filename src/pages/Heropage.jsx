import {Hero3D} from "../components/Hero3D.jsx";
import {Navbar} from "../components/Navbar.jsx";
import FloatingBall from "../components/FloatingBall.jsx";
import VerticalCarousel from "../components/VerticalCorousel.jsx";


export const Heropage=()=>{


    return (
        <main className="h-screen overflow-hidden">
            <Navbar/>
            <VerticalCarousel/>
            <Hero3D/>

        </main>
    )
}