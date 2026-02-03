import { ArrowDown, Code2, Palette, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-20 animate-grid"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="glass-card px-4 py-2 mb-8 flex items-center gap-2 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">
              Available for freelance work
            </span>
          </div>

          {/* Main Title */}
          <h1 className="section-title mb-4 animate-slide-up">
            <span className="text-foreground">Hello, I'm </span>
            <span className="gradient-text glow-cyan">Youssef</span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-secondary mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Front-End Developer
          </p>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Crafting pixel-perfect, immersive web experiences with clean code and creative design.
            Specializing in HTML, CSS, JavaScript, and algorithmic problem-solving.
          </p>

          {/* Skills Icons */}
          <div className="flex gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="glass-card p-4 hover:border-primary/50 transition-all duration-300 group">
              <Code2 className="w-8 h-8 text-primary group-hover:glow-cyan transition-all duration-300" />
            </div>
            <div className="glass-card p-4 hover:border-secondary/50 transition-all duration-300 group">
              <Palette className="w-8 h-8 text-secondary group-hover:glow-magenta transition-all duration-300" />
            </div>
            <div className="glass-card p-4 hover:border-accent/50 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-accent transition-all duration-300" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a href="#projects" className="btn-gaming">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn-secondary-gaming">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-float"
      >
        <span className="font-body text-sm uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
