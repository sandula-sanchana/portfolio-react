import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiHibernate} from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import baketrack from '../assets/projects/bakeT_bg.png';
import port_html  from '../assets/projects/portf2.png'


export const projects = [
    {
        id: "BakeTrack_id",
        title: "BAKETRACK",
        description: "B2B bakery management system using Java, JavaFX, and MySQL",
        link: "https://github.com/sandula-sanchana/BakeTrack-Layered",
        image: baketrack,
        color: "#1e2630",
        tech: [
            { icon: FaJava, name: "Java" },
            { icon: FaDatabase, name: "MySQL" },
        ],
    },
    {
        id: "Portfolio_id",
        title: "PORTFOLIO",
        description: "My personal website using HTML, CSS, and JS",
        link: "https://github.com/sandula-sanchana/portfolio-sandula",
        image: port_html,
        color: "#3e7552",
        tech: [
            { icon: FaHtml5, name: "HTML" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: FaJsSquare, name: "JavaScript" },
        ],
    },
    {
        id: "Student_id",
        title: "Ignition Edu",
        description: "Driving School System using Hibernate ORM",
        link: "https://github.com/sandula-sanchana/ORM-CourseWork-Sandula-73",
        image: "https://placehold.co/1200x800/8c5a4d/ffffff?text=Student+Management",
        color: "#8c5a4d",
        tech: [
            { icon: FaJava, name: "Java" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: SiHibernate, name: "Hibernate" },
        ],
    },
    {
        id: "Music_id",
        title: "ByteLink",
        description: "Java Socket-Based Chat Application",
        link: "https://github.com/sandula-sanchana/ByteLink-java-Chat-Application",
        image: "assets/images/ss2.png",
        color: "#2a4b87",
        tech: [
            { icon: FaJava, name: "Java" },
            { icon: GiNetworkBars, name: "Sockets" },
        ],
    },
    {
        id: "Game_id",
        title: "QuickByte",
        description: "POS restaurant management system using HTML, CSS, JS, and Bootstrap",
        link: "https://github.com/YourUsername/YourRepoName",
        image: "assets/images/QuickByte.png",
        color: "#4c442e",
        tech: [
            { icon: FaHtml5, name: "HTML" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: FaJsSquare, name: "JavaScript" },
            { icon: FaBootstrap, name: "Bootstrap" },
        ],
    },
];
