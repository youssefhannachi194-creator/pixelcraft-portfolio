import { Terminal, Trophy, Clock, Coffee } from "lucide-react";

const stats = [
  { icon: Trophy, value: "50+", label: "Projects Completed" },
  { icon: Clock, value: "3+", label: "Years Experience" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Terminal, value: "10K+", label: "Lines of Code" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] mb-4">
            Get to Know Me
          </p>
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="glass-card p-8 neon-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Passionate <span className="text-primary">Developer</span> & 
                <span className="text-secondary"> Problem Solver</span>
              </h3>
              
              <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
                I'm a front-end web developer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. With expertise in 
                HTML, CSS, and JavaScript, I transform ideas into responsive, 
                pixel-perfect websites.
              </p>
              
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Beyond coding, I have a strong foundation in algorithms and data 
                structures, which helps me write efficient, optimized code. I love 
                tackling complex problems and turning them into elegant solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                {["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass-card font-display text-sm text-primary border border-primary/30 hover:border-primary/60 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-gaming text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                <p className="font-display text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
