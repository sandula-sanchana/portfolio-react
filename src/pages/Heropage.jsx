import {Hero3D} from "../components/Hero3D.jsx";
import {Navbar} from "../components/Navbar.jsx";
import VerticalCarousel from "../components/MarqueeComponent.jsx";


export const Heropage=()=>{


    return (
        <main className="">
            <Navbar/>
            <Hero3D/>
            <VerticalCarousel/>

        </main>
    )
}