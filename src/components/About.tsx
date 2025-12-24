import { GraduationCap, Award, Code2, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "First Class Honors",
      description: "GPA: 4.66/5.00"
    },
    {
      icon: Brain,
      title: "AI Research",
      description: "ML & Data Science Focus"
    },
    {
      icon: Code2,
      title: "Full Stack Dev",
      description: "Python, TypeScript, Rust"
    },
    {
      icon: Award,
      title: "Award Winner",
      description: "Google AI Hackathon"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">About Me</p>
            <h2 className="section-heading">
              Building the <span className="gradient-text">Future</span> with AI
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student at <span className="text-foreground font-medium">Pan-Atlantic University</span>, 
                Lagos, Nigeria, currently pursuing my Bachelor's degree with a focus on Artificial Intelligence 
                and Machine Learning.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech spans from developing probabilistic graphical models for medical risk prediction 
                to building NLP-powered spam detection systems. I'm passionate about creating AI solutions that 
                have real-world impact, particularly in healthcare and finance.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I serve as a Class Representative and Project Manager for the Technology 
                Innovation Club, where I lead initiatives that bridge the gap between theoretical knowledge 
                and practical application.
              </p>

              {/* Key Courses */}
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Data Structures', 'Statistics', 'Linear Algebra', 'Numerical Methods'].map((course) => (
                    <span key={course} className="skill-badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="glass-card p-6 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
