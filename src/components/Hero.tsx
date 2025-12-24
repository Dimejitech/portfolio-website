import { Github, Linkedin, Youtube, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-slide-up stagger-1">
            <span className="gradient-text">Oladimeji</span>{" "}
            <span className="text-foreground">Abaniwonnda</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-slide-up stagger-2">
            AI & Machine Learning Enthusiast • Research Assistant • Software Developer
          </p>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-slide-up stagger-3">
            Computer Science student at Pan-Atlantic University with First Class Honors (4.66/5.0). 
            Passionate about leveraging AI and data science to solve real-world problems.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16 opacity-0 animate-slide-up stagger-4">
            <a 
              href="https://github.com/Dimejitech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover-lift hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/oladimeji-abaniwonnda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover-lift hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover-lift hover:border-primary/50 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="mailto:abaniwonndadimeji@gmail.com"
              className="glass-card p-3 hover-lift hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <a 
            href="#about" 
            className="inline-block opacity-0 animate-fade-in stagger-5"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-xs font-mono">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
