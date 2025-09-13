import { Sparkle } from "lucide-react";

const SkillsTicker = () => {
  const skills = [
    "React", "Node.js", "JavaScript (ES6+)", "TypeScript", 
    "CSS3", "Figma", "Java", "SQL", "Python", "Git"
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="border-t border-b border-glass-border py-6 overflow-hidden" aria-label="Technology Skills">
      <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-lg font-medium text-text-secondary">
              {skill}
            </span>
            <Sparkle className="w-3 h-3 text-brand-primary opacity-50" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsTicker;