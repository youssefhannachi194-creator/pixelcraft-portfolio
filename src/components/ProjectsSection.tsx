import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Gaming Dashboard",
    description: "A comprehensive gaming statistics dashboard with real-time data visualization and responsive design.",
    tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce UI",
    description: "Modern e-commerce interface with product filtering, cart functionality, and smooth animations.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive tool to visualize sorting and pathfinding algorithms with step-by-step animations.",
    tech: ["JavaScript", "CSS3", "HTML5 Canvas"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Weather App",
    description: "Clean weather application with location-based forecasts and dynamic backgrounds.",
    tech: ["JavaScript", "API Integration", "CSS3"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag-and-drop functionality and local storage persistence.",
    tech: ["JavaScript", "CSS3", "HTML5"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Template",
    description: "Customizable portfolio template with modern design and smooth scroll animations.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary uppercase tracking-[0.3em] mb-4">
            My Work
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="card-gaming group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 glass-card hover:border-primary/50 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 glass-card hover:border-secondary/50 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-secondary" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-display text-primary/80 bg-primary/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
            Other Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs font-body text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
