import {useGSAP} from "@gsap/react";
import MarqueeComponent from "./MarqueeComponent.jsx";


export const AboutSection=()=>{

    useGSAP(()=>{

    },[])

    return(
        <section className="min-h-[200vh] relative">
        <MarqueeComponent />
        </section>
    )
}