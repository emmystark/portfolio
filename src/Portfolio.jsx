import React, { useState, useEffect } from 'react';
import { Github, Mail, Code, Database, Cloud, Zap, ChevronDown, ExternalLink, Briefcase, GraduationCap, Linkedin, fileUser } from 'lucide-react';

import './styles.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Backend Engineer Lead",
      company: "VideoDB AI Surveillance Agent",
      period: "Oct 2025 - Jan 2026",
      description: [
        "Developed scalable backend solutions for video processing and data management",
        "Conducted performance tuning of server applications, enhancing overall responsiveness and stability",
        "Led integration of AI algorithms to enhance surveillance accuracy and efficiency"
      ]
    },
    {
      title: "Backend Engineer",
      company: "Private Chatbot for Companies",
      period: "Jan 2025 - Sept 2025",
      description: [
        "Developed a secure Python/LangChain backend for a fintech chatbot, enabling precise document-based queries for internal tools",
        "Integrated NLU and file processing to extract insights from sensitive crypto and financial data with a high focus on privacy",
        "Refined system accuracy through iterative testing phases to ensure reliable deployment in production environments",
        "Reduced development time by 20% by architecting reusable React components and optimizing RESTful API performance"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "Oct 2023 - Dec 2024",
      description: [
        "Engineered Django backend logic for cart, order, and payment systems, designed for fintech and crypto-transaction scalability",
        "Managed MySQL databases for inventory and transactions, implementing secure APIs to ensure data integrity and fraud prevention"
      ]
    }
  ];

  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Next.js"],
    "Backend": ["Python", "Django", "FastAPI", "Node.js"],
    "AI/ML": ["LangChain", "LangGraph", "RAG Implementation"],
    "Blockchain": ["Solidity", "Rust"],
    "Databases": ["SQL", "MongoDB", "PostgreSQL", "MySQL"],
    "DevOps": ["CI/CD pipelines", "Git"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              EN
            </h1>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-6 animate-fadeIn">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Emmanuel Nkereuwem
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">Backend Engineer & AI Developer</p>
            <p className="text-lg text-gray-400">Building scalable AI-driven systems and blockchain solutions</p>
          </div>
          
          <div className="flex gap-4 justify-center mb-8">
            <a href="https://github.com/emmystark" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-nkereuwems/" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nkememmanuel5505@gmail.com"
               className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="mailto:nkememmanuel5505@gmail.com"
               className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110">
              <fileUser size={24} />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce mt-8 text-cyan-400">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dynamic full-stack developer and applied AI engineer with five years of experience in crafting scalable web applications, AI-driven systems, and blockchain-integrated solutions. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Expertise in developing production-ready AI tools for diverse applications, including surveillance, chatbots, and fintech, complemented by comprehensive full-stack development using modern frameworks.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proven track record in remote collaboration, optimizing performance, and delivering ethical, high-impact solutions. Fluent in English and French.
            </p>
            
            <div className="mt-8 flex items-center gap-2 text-cyan-400">
              <GraduationCap size={20} />
              <span className="text-gray-300">Software Engineering - ALX Cohort 9 (Aug 2019 - Oct 2020)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} 
                   className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Briefcase className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-400 text-lg mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex gap-2">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} 
                   className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  {category === 'Frontend' && <Code size={20} />}
                  {category === 'Backend' && <Database size={20} />}
                  {category === 'AI/ML' && <Zap size={20} />}
                  {category === 'DevOps' && <Cloud size={20} />}
                  {category === 'Databases' && <Database size={20} />}
                  {category === 'Blockchain' && <Code size={20} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} 
                          className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <div className="space-y-6">
              <a href="mailto:nkememmanuel5505@gmail.com" 
                 className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <Mail className="group-hover:scale-110 transition-transform" size={24} />
                <span>Gmail</span>
              </a>
              
              <a href="https://github.com/emmystark" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <Github className="group-hover:scale-110 transition-transform" size={24} />
                <span>github</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-nkereuwems/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <Linkedin className="group-hover:scale-110 transition-transform" size={24} />
                <span>linkedin</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2026 Emmanuel Nkereuwem.</p>
        </div>
      </footer>
    </div>
  );
}
