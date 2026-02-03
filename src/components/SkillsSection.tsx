import { useEffect, useState, useRef } from "react";

const skills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3 / SCSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "React", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Responsive Design", level: 92, category: "Frontend" },
  { name: "Algorithms", level: 85, category: "Core" },
  { name: "Data Structures", level: 83, category: "Core" },
  { name: "Problem Solving", level: 88, category: "Core" },
  { name: "Git / GitHub", level: 80, category: "Tools" },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] mb-4">
            My Expertise
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Skills & Fields</span>
          </h2>
        </div>

        {/* Skills by Category */}
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="font-display text-xl font-semibold text-secondary uppercase tracking-wider">
                {category}
              </h3>
              
              <div className="grid gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="glass-card p-4 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-display text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="font-body text-primary font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 uppercase tracking-wider">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "REST APIs", "Figma", "VS Code", "Terminal", "npm/yarn", "Vite", "Webpack"].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 glass-card font-display text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
