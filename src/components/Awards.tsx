import { Trophy, Medal, Award, BookOpen, Heart, Users } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Google AI4 Culture Hackathon Winner",
      organization: "PAU",
      year: "2024"
    },
    {
      icon: Heart,
      title: "Spirit of Service Award",
      organization: "Pan-Atlantic University",
      year: "2024"
    },
    {
      icon: Medal,
      title: "Volleyball Rookie of the Year",
      organization: "PAU University Team",
      year: "2025"
    }
  ];

  const certifications = [
    {
      title: "Python for Data Science and Machine Learning",
      provider: "Udemy",
      year: "2024"
    },
    {
      title: "Fundamentals of Statistics: Sampling and Collecting Data",
      provider: "Alison",
      year: "2025"
    }
  ];

  const leadership = [
    "Class Representative: Computer Science, Class of 2026",
    "Project Manager: Technology Innovation Club, PAU",
    "Head of Feedback: School of Science and Technology Planning Committee"
  ];

  return (
    <section id="awards" className="py-24 relative bg-secondary/20">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Recognition</p>
            <h2 className="section-heading">
              Awards & <span className="gradient-text">Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Awards */}
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Awards</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award) => (
                  <div key={award.title} className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="font-medium text-sm text-foreground">{award.title}</p>
                    <p className="text-xs text-muted-foreground">{award.organization} • {award.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="border-l-2 border-accent/30 pl-4 py-1">
                    <p className="font-medium text-sm text-foreground">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">{cert.provider} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Leadership</h3>
              </div>
              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
