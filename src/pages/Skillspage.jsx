import ReactIcon from '../assets/icons/React-Dark.svg';
import NextjsIcon from '../assets/icons/NextJS-Dark.svg';
import TailwindIcon from '../assets/icons/TailwindCSS-Dark.svg';
// import GSAPIcon from '../assets/icons/GSAP.svg';
import JSIcon from '../assets/icons/JavaScript.svg';
import JavaIcon from '../assets/icons/Java-Dark.svg';
import SpringIcon from '../assets/icons/Spring-Dark.svg';
import MySqlIcon from '../assets/icons/MySQL-Dark.svg';
import DockerIcon from '../assets/icons/Docker.svg';
import LinuxIcon from '../assets/icons/Linux-Dark.svg';
import PythonIcon from '../assets/icons/Python-Dark.svg';
import TensorFlowIcon from '../assets/icons/TensorFlow-Dark.svg';
import OpenCVIcon from '../assets/icons/OpenCV-Dark.svg';
import MongoIcon from '../assets/icons/MongoDB.svg';
import PostgresIcon from '../assets/icons/PostgreSQL-Dark.svg';
import ExpressIcon from '../assets/icons/ExpressJS-Dark.svg';
import node from '../assets/icons/NodeJS-Dark.svg';
import HTMLIcon from '../assets/icons/HTML.svg';
import CSSIcon from '../assets/icons/CSS.svg';
import TSIcon from '../assets/icons/TypeScript.svg';
import MarkdownIcon from '../assets/icons/Markdown-Dark.svg';
import FIGMA from '../assets/icons/Figma-Dark.svg';
import PrismaIcon from '../assets/icons/Prisma.svg';

import GitIcon from '../assets/icons/Git.svg';
import GitHubIcon from '../assets/icons/Github-Dark.svg';
import VSCodeIcon from '../assets/icons/VSCode-Dark.svg';
import PostmanIcon from '../assets/icons/Postman.svg';
import IDEAIcon from '../assets/icons/Idea-Dark.svg';
import jQueryIcon from '../assets/icons/JQuery.svg';
import ArchIcon from '../assets/icons/Arch-Dark.svg';
import MavenIcon from '../assets/icons/Maven-Dark.svg';
import NotionIcon from '../assets/icons/Notion-Dark.svg';
import StackOverflowIcon from '../assets/icons/StackOverflow-Dark.svg';
import ViteIcon from '../assets/icons/Vite-Dark.svg';
import UbuntuIcon from '../assets/icons/Ubuntu-Dark.svg';
import VercelIcon from '../assets/icons/Vercel-Dark.svg';

import PyTorchIcon from '../assets/icons/PyTorch-Dark.svg';
import ScikitLearnIcon from '../assets/icons/ScikitLearn-Dark.svg';

import SkillsMarquee from "../components/skills/SkillsMarquee.jsx";

const frontendSkills = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "HTML", icon: HTMLIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "TypeScript", icon: TSIcon },
    { name: "Markdown", icon: MarkdownIcon },
    { name: "Figma", icon: FIGMA }
];



const backendSkills = [
    { name: "Java", icon: JavaIcon },
    { name: "Spring", icon: SpringIcon },
    { name: "MySQL", icon: MySqlIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Linux", icon: LinuxIcon },
    { name: "MongoDB", icon: MongoIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "NodeJs", icon: node },
    { name: "Python", icon: PythonIcon },
    { name: "Prisma", icon: PrismaIcon }
];


const aiSkills = [
    { name: "Python", icon: PythonIcon },
    { name: "TensorFlow", icon: TensorFlowIcon },
    { name: "PyTorch", icon: PyTorchIcon },
    { name: "OpenCV", icon: OpenCVIcon },
    { name: "Scikit-Learn", icon: ScikitLearnIcon },
    // { name: "Pandas", icon: PandasIcon },
    // { name: "NumPy", icon: NumpyIcon },
];

const toolsSkills = [
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "VS Code", icon: VSCodeIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "IntelliJ IDEA Ultimate", icon: IDEAIcon },
    { name: "jQuery", icon: jQueryIcon },
    { name: "Linux", icon: LinuxIcon },
    { name: "Arch Linux", icon: ArchIcon },
    { name: "Maven", icon: MavenIcon },
    { name: "Notion", icon: NotionIcon },
    { name: "Stack Overflow", icon: StackOverflowIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "Ubuntu", icon: UbuntuIcon },
    { name: "Vercel", icon: VercelIcon },
];

const SkillsPage = () => {
    const categories = [
        { title: "Frontend", skills: frontendSkills, speed: 10 },
        { title: "Backend", skills: backendSkills, speed: 14, reverse: true },
        { title: "AI / ML", skills: aiSkills, speed: 12 },
        { title: "Tools", skills: toolsSkills, speed: 15 },
    ];

    return (
        <section className="relative min-h-screen bg-white text-black overflow-hidden mt-12 px-4 sm:px-8 py-12 sm:py-16">
            {/* Header */}
            <div className="relative z-20 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase tracking-tight text-black">
                    My Skills
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
                    A showcase of my frontend, backend, AI/ML, and developer tools expertise.
                </p>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-12 sm:top-24 left-8 sm:left-16 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-lime-400 flex items-center justify-center text-black text-xl sm:text-2xl animate-bounce">
                🔥
            </div>
            <div className="absolute top-20 sm:top-40 right-12 sm:right-24 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-red-500 flex items-center justify-center text-black text-xl sm:text-2xl animate-bounce">
                ⬇️
            </div>

            {/* Skill Marquees */}
            <div className="flex flex-col gap-8 sm:gap-12">
                {categories.map((cat, i) => (
                    <div key={i} className="relative w-full">
                        {/* Watermark */}
                        <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black/20 pointer-events-none select-none z-20">
                            {cat.title}
                        </span>

                        {/* Marquee */}
                        <div className="relative z-10">
                            <SkillsMarquee
                                skills={cat.skills}
                                speed={cat.speed}
                                reverse={cat.reverse}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};





export default SkillsPage;
