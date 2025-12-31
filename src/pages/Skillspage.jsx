import SkillsMarquee from "../components/skills/SkillsMarquee.jsx";

const frontendSkills = [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "GSAP", icon: "https://skillicons.dev/icons?i=gsap" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
];

const backendSkills = [
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Spring", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
];

const aiSkills = [
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
    { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" },
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
        </section>
    );
};

export default SkillsPage;
