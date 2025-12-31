import SkillCard from "../components/skills/SkillCard.jsx";
import CatTyping from "../components/skills/CatTyping.jsx";

const frontendSkills = [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "GSAP", icon: "https://skillicons.dev/icons?i=gsap" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" }
];

const backendSkills = [
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Spring", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" }
];

const aiSkills = [
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
    { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" }
];

const Section = ({ title, skills }) => (
    <div className="mb-24 border-2 border-white">
        <h2 className="text-3xl font-bold mb-10 text-white">{title}</h2>
        <div className="flex flex-wrap gap-6">
            {skills.map(skill => (
                <SkillCard key={skill.name} {...skill} />
            ))}
        </div>
    </div>
);

const SkillsPage = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-[#05070f] to-black px-20 py-32">
            <CatTyping />

            <h1 className="text-5xl font-extrabold mb-24 text-white">
                Skills & Technologies
            </h1>

            <Section title="Frontend" skills={frontendSkills} />
            <Section title="Backend" skills={backendSkills} />
            <Section title="AI / ML" skills={aiSkills} />
        </section>
    );
};

export default SkillsPage;
