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
    { name: "Prisma", icon: PrismaIcon } // Added Prisma
];


const aiSkills = [
    { name: "Python", icon: PythonIcon },
    { name: "TensorFlow", icon: TensorFlowIcon },
    { name: "OpenCV", icon: OpenCVIcon },
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
    return (
        <section className="min-h-screen flex flex-col justify-center gap-6">
            {/* Frontend */}
            <SkillsMarquee skills={frontendSkills} speed={10} />

            {/* Backend (reverse direction for depth) */}
            <SkillsMarquee skills={backendSkills} speed={14} reverse />

            {/* AI / ML */}
            <SkillsMarquee skills={aiSkills} speed={12} />

            <SkillsMarquee skills={toolsSkills} speed={15} />
        </section>
    );
};

export default SkillsPage;
