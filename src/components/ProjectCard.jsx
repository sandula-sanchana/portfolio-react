import React from 'react';

// Assuming this component is in a separate file, ProjectCard.jsx
// It no longer uses GSAP for hover, relying on Tailwind hover classes instead
const ProjectCard = ({ title, description, link, tech, image, color }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
        >
            <div className="p-6">
                {/* Project Title and Description */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest leading-snug">
                        {title}
                        <span className="block text-xs font-normal text-gray-500 mt-1">{description}</span>
                    </h3>
                    <span className="text-xl text-gray-400">→</span>
                </div>

                {/* Tech Stack - Aligned to the top right in the design */}
                <div className="flex gap-3 mb-4 flex-wrap">
                    {tech.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                            <t.icon className="text-base text-black" />
                            <span>{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image/Mockup Area */}
            <div
                style={{ backgroundColor: color }}
                className="h-68 md:h:auto" // Fixed height for visual consistency
            >
                {/* This is the single image element */}
                <img
                    src={image}
                    alt={title}
                    className="object-contain w-full shadow-xl"
                />
            </div>
        </a>
    );
};

export default ProjectCard;