import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Lightbulb, Code, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  problem: string;
  features: string[];
  technologies: string[];
  learnings: string[];
  github?: string;
  liveUrl?: string;
  screenshots: string[];
}

const projectsData: Record<string, ProjectData> = {
  "medical-risk-prediction": {
    id: "medical-risk-prediction",
    title: "Medical Risk Prediction",
    subtitle: "Probabilistic Graphical Models",
    description: "Designed a Bayesian Network to model medical risk factors and their influence on heart disease using PGMs.",
    fullDescription: "This project explores the application of Probabilistic Graphical Models (PGMs) in healthcare to predict heart disease risk. Using Bayesian Networks, I modeled the complex relationships between various medical risk factors such as age, cholesterol levels, blood pressure, smoking habits, and family history to compute the probability of heart disease occurrence.",
    problem: "Heart disease remains one of the leading causes of death globally. Early detection and risk assessment are crucial for prevention. Traditional risk calculators often fail to capture the complex interdependencies between various health factors. This project addresses the need for a more sophisticated probabilistic approach that can model these relationships and provide more accurate risk predictions.",
    features: [
      "Bayesian Network structure learning from medical datasets",
      "Probabilistic inference for heart disease risk calculation",
      "Interactive visualization of factor dependencies",
      "Support for partial evidence (incomplete patient data)",
      "Sensitivity analysis for identifying key risk factors",
      "Model validation against clinical outcomes"
    ],
    technologies: ["Python", "NetworkX", "pgmpy", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    learnings: [
      "Deep understanding of Bayesian Networks and conditional probability",
      "Practical application of probabilistic graphical models in healthcare",
      "Data preprocessing techniques for medical datasets",
      "Model validation and evaluation in healthcare contexts",
      "The importance of domain knowledge in feature engineering"
    ],
    github: "https://github.com/Dimejitech/Probability-Graphical-Model",
    screenshots: [
      "/projects/medical-risk.png",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    ]
  },
  "spam-detection": {
    id: "spam-detection",
    title: "Spam Detection System",
    subtitle: "NLP & Naïve Bayes",
    description: "Built a spam classifier achieving 95.6% accuracy using TF-IDF vectorization and Naïve Bayes.",
    fullDescription: "This project implements a robust email and SMS spam detection system using Natural Language Processing (NLP) techniques combined with machine learning. The classifier uses TF-IDF (Term Frequency-Inverse Document Frequency) vectorization to convert text messages into numerical features, which are then classified using a Multinomial Naïve Bayes algorithm.",
    problem: "Spam messages continue to be a significant problem, causing information overload, security risks, and wasted time for users. Traditional rule-based spam filters are easily circumvented by spammers. This project demonstrates how machine learning can provide a more adaptive and accurate solution to spam detection that evolves with changing spam patterns.",
    features: [
      "Text preprocessing pipeline (tokenization, stemming, stop word removal)",
      "TF-IDF feature extraction with optimized parameters",
      "Multinomial Naïve Bayes classification",
      "Cross-validation for robust model evaluation",
      "Confusion matrix and classification report generation",
      "Real-time spam prediction for new messages"
    ],
    technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    learnings: [
      "Text preprocessing and cleaning techniques for NLP",
      "Understanding of TF-IDF and its importance in text classification",
      "Practical application of Naïve Bayes theorem",
      "Model evaluation metrics for imbalanced datasets",
      "The trade-off between precision and recall in spam detection"
    ],
    github: "https://github.com/Dimejitech/Spam-Detection-Using-Naive-Bayes-and-Natural-Language-Processing",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop"
    ]
  },
  "fraud-detection": {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    subtitle: "Random Forests & SMOTE",
    description: "Analyzed 284,807 transactions to detect fraud using Random Forests with ROC-AUC of 0.96.",
    fullDescription: "This project tackles the challenging problem of credit card fraud detection using advanced machine learning techniques. Working with a highly imbalanced dataset of 284,807 transactions (where only 0.172% were fraudulent), I implemented a Random Forest classifier combined with SMOTE (Synthetic Minority Over-sampling Technique) to effectively identify fraudulent transactions while minimizing false positives.",
    problem: "Credit card fraud costs billions of dollars annually and affects millions of consumers. The main challenge in fraud detection is the extreme class imbalance—legitimate transactions vastly outnumber fraudulent ones. This makes it difficult for standard machine learning algorithms to learn patterns of fraud. This project addresses this challenge using advanced sampling techniques and robust evaluation metrics.",
    features: [
      "Exploratory Data Analysis (EDA) of transaction patterns",
      "SMOTE oversampling to address class imbalance",
      "Random Forest ensemble classifier",
      "Feature importance analysis",
      "ROC curve and AUC score evaluation",
      "Precision-Recall curve for threshold optimization"
    ],
    technologies: ["Python", "Scikit-learn", "Imbalanced-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    learnings: [
      "Handling severely imbalanced datasets in machine learning",
      "Understanding SMOTE and other oversampling techniques",
      "Random Forest hyperparameter tuning",
      "Choosing appropriate evaluation metrics for imbalanced classification",
      "The business impact of false positives vs false negatives in fraud detection"
    ],
    github: "https://github.com/Dimejitech/credit-card-fraud-detection",
    screenshots: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    ]
  },
  "ai-knowledge-base": {
    id: "ai-knowledge-base",
    title: "AI Knowledge Base for PAU",
    subtitle: "Microsoft Copilot Studio",
    description: "Leading development of a university AI agent to reduce administrative burden.",
    fullDescription: "As the technical lead for this ongoing project, I am developing an AI-powered knowledge base agent for Pan-Atlantic University using Microsoft Copilot Studio. The system is designed to provide accurate, hallucination-free responses to student and staff queries by leveraging a carefully structured SharePoint-based knowledge architecture.",
    problem: "University administrative staff spend countless hours answering repetitive questions from students about admissions, course registration, campus facilities, and policies. This creates bottlenecks during peak periods and delays responses to more complex inquiries. An intelligent AI agent can handle routine questions instantly, freeing staff to focus on complex issues that require human judgment.",
    features: [
      "SharePoint-based knowledge repository integration",
      "Natural language query understanding",
      "Context-aware response generation",
      "Multi-turn conversation support",
      "Analytics dashboard for query patterns",
      "Continuous learning from user feedback"
    ],
    technologies: ["Microsoft Copilot Studio", "SharePoint", "Power Automate", "Azure AI", "Microsoft Graph API"],
    learnings: [
      "Enterprise AI deployment considerations",
      "Knowledge base architecture design",
      "Prompt engineering for accurate responses",
      "User experience design for conversational AI",
      "Change management in educational institutions"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=500&fit=crop"
    ]
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container px-6 mb-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-mono text-sm mb-2">{project.subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {project.fullDescription}
            </p>
            
            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="container px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className="glass-card overflow-hidden rounded-lg"
                >
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="container px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Problem Statement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="container px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Learnings Section */}
        <section className="container px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">What I Learned</h2>
              </div>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">
              Interested in this project or want to collaborate?
            </p>
            <a 
              href="mailto:abaniwonndadimeji@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
