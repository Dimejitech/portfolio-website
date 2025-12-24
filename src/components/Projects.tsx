import { ExternalLink, Github, Brain, Shield, Activity, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: "Medical Risk Prediction",
      subtitle: "Probabilistic Graphical Models",
      description: "Designed a Bayesian Network to model medical risk factors and their influence on heart disease using PGMs. Applied probabilistic inference to predict health outcomes.",
      tags: ["Python", "NetworkX", "Bayesian Networks", "Healthcare"],
      gradient: "from-primary/20 to-accent/20",
      github: "https://github.com/Dimejitech"
    },
    {
      icon: Shield,
      title: "Spam Detection System",
      subtitle: "NLP & Naïve Bayes",
      description: "Built a spam classifier achieving 95.6% accuracy using TF-IDF vectorization and Naïve Bayes. Processed 5,574 messages with optimized preprocessing.",
      tags: ["Python", "NLP", "Scikit-learn", "TF-IDF"],
      gradient: "from-accent/20 to-primary/20",
      github: "https://github.com/Dimejitech"
    },
    {
      icon: Brain,
      title: "Credit Card Fraud Detection",
      subtitle: "Random Forests & SMOTE",
      description: "Analyzed 284,807 transactions to detect fraud using Random Forests. Applied SMOTE oversampling achieving ROC-AUC of 0.96.",
      tags: ["Python", "Random Forest", "SMOTE", "Finance"],
      gradient: "from-primary/20 to-accent/20",
      github: "https://github.com/Dimejitech"
    },
    {
      icon: Bot,
      title: "AI Knowledge Base for PAU",
      subtitle: "Microsoft Copilot Studio",
      description: "Leading development of a university AI agent to reduce administrative burden. Designed SharePoint-based knowledge architecture for hallucination-free responses.",
      tags: ["AI Agent", "SharePoint", "Copilot Studio", "Ongoing"],
      gradient: "from-accent/20 to-primary/20",
      isOngoing: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Work</p>
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              A collection of AI and machine learning projects solving real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article 
                key={project.title}
                className="glass-card group overflow-hidden hover-lift"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  {/* Icon and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    {project.isOngoing && (
                      <span className="text-xs font-mono px-2 py-1 rounded-full bg-accent/20 text-accent">
                        Ongoing
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
