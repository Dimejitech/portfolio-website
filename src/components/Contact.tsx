import { Mail, Github, Linkedin, Youtube, MapPin, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Dimejitech",
      username: "@Dimejitech"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/oladimeji-abaniwonnda",
      username: "oladimeji-abaniwonnda"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@DimejiTech",
      username: "YouTube Channel"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:abaniwonndadimeji@gmail.com",
      username: "abaniwonndadimeji@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />

      <div className="container px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="section-heading mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, research collaborations, 
            or just having a chat about AI and technology.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-10 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Lagos, Nigeria</span>
          </div>

          {/* CTA Button */}
          <a 
            href="mailto:abaniwonndadimeji@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 mb-16"
          >
            <Send className="w-5 h-5" />
            <span>Send Me a Message</span>
          </a>

          {/* Social Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 hover-lift hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm text-foreground">{link.label}</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[140px]">{link.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
