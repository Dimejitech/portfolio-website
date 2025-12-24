const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Rust", "C/C++", "SQL", "Java", "Solidity", "HTML/CSS"]
    },
    {
      title: "ML & Data Science",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "NetworkX", "Pgmpy"]
    },
    {
      title: "Developer Tools",
      skills: ["Git/GitHub", "Docker", "VS Code", "PyCharm", "Jupyter", "Streamlit", "SharePoint", "Microsoft Copilot"]
    },
    {
      title: "Frameworks",
      skills: ["Hyperledger Besu", "CausalLearn", "React", "Node.js", "PostgreSQL"]
    }
  ];

  const softSkills = [
    "Communication", "Leadership", "Problem-solving", "Project Management", 
    "Teaching/Tutoring", "Research", "English (Native)", "Yoruba (Native)"
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Skills</p>
            <h2 className="section-heading">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category) => (
              <div key={category.title} className="glass-card p-6 hover-lift">
                <h3 className="font-semibold text-foreground mb-4 text-sm">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-8 text-center">
            <h3 className="font-semibold text-foreground mb-6">Soft Skills & Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 text-sm rounded-full border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
