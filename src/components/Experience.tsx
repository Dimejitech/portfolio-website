import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Undergraduate Research Assistant",
      company: "Pan-Atlantic University",
      period: "Jun 2025 – Present",
      description: "Contributing to research on AI adoption in SMEs using hybrid interpretable ML frameworks. Working with 5000+ SME survey data.",
      highlights: ["ML Research", "Data Analysis", "Stacked Ensembles"]
    },
    {
      type: "work",
      title: "Undergraduate Intern",
      company: "Solt Advisory",
      period: "Sep 2025 – Present",
      description: "Preparing data-driven insights for investment advisory. Exploring intersection of finance and technology.",
      highlights: ["Financial Analysis", "Data Insights", "Investment"]
    },
    {
      type: "work",
      title: "Tech Platforms Intern",
      company: "KPMG Nigeria",
      period: "Jul 2025 – Sep 2025",
      description: "Assisted in ERP solution development and AI Summit planning. Streamlined startup evaluation processes.",
      highlights: ["ERP Development", "AI Summit", "Tech Consulting"]
    },
    {
      type: "work",
      title: "Blockchain Developer Intern",
      company: "PeakHarmony",
      period: "Jul 2024 – Oct 2024",
      description: "Developed blockchain solutions for financial accessibility. Designed African-centered blockchain network architecture.",
      highlights: ["Blockchain", "Hyperledger", "Web3"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Experience</p>
            <h2 className="section-heading">
              Professional <span className="gradient-text">Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div 
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 hover-lift">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-1">{exp.period}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
