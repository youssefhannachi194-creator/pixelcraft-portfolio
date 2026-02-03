import { Gamepad2, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-xl font-bold text-primary hover:glow-cyan transition-all duration-300"
          >
            <Gamepad2 className="w-6 h-6" />
            <span className="gradient-text">YOUSSEF</span>
          </a>

          {/* Copyright */}
          <p className="font-body text-muted-foreground text-center flex items-center gap-2">
            © {currentYear} Made with 
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" /> 
            by Youssef
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 glass-card hover:border-primary/50 hover:shadow-[0_0_20px_hsl(185_100%_50%/0.3)] transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </button>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-display text-sm text-muted-foreground hover:text-primary uppercase tracking-wider transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
