import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Code,
  Database,
  Cloud,
  Zap,
  ChevronDown,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Linkedin,
  FileUser,
  Layout,
  Smartphone,
} from "lucide-react";

import "./styles.css";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "experience", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const experiences = [
    {
      title: "Founding Engineer & CTO",
      company: "ProvidiusTech",
      projectUrl: "https://providiustech.com",
      description: [
        "ProvidiusTech is a multi-tenant AI customer support platform that pulls WhatsApp, email, webchat, Telegram, and social DMs into one AI-powered inbox, recognized by the NVIDIA Inception program.",
        "Built a multilingual RAG pipeline that handles Amharic and Tigrinya alongside the major languages, so tenants aren't stuck with English-only support.",
        "Designed a dual-channel email setup across AWS SES and Gmail OAuth, with per-tenant mutual exclusion so accounts never cross wires.",
        "Put KMS envelope encryption in place to keep every tenant's credentials isolated and secure.",
        "Built the billing and usage enforcement engine from the ground up.",
      ],
    },
    {
      title: "Technical Co-Founder & CTO",
      company: "Beldium",
      projectUrl: "https://www.beldium.com",
      description: [
        "Beldium is a compliance and marketplace platform connecting miners, buyers, and financing partners across Nigeria's solid minerals sector.",
        "Audited the codebase against what had actually been delivered, then rebuilt the 12-week roadmap around the verified state of the project instead of the assumed one.",
        "Tracked down a multi-layer email infrastructure failure spanning SPF, MX, and DKIM/DMARC and got it fixed.",
        "Found leaked credentials sitting in 238 commits of git history, scrubbed them out, and rotated every affected key.",
      ],
    },
    {
      title: "ML Team Lead",
      company: "ORDERCAST (GROUP10 E-Commerce Capstone)",
      projectUrl: "https://group10-e-commerce-capstone-projectgit-crjdcsozz4nptzf9fmcgtn.streamlit.app",
      description: [
        "Led a three-person machine learning team building ORDERCAST, a model to predict order cancellation on a Nigerian e-commerce dataset.",
        "Caught two separate feature leakage issues before they could quietly corrupt the results.",
        "Set the evaluation framework and kept scoring consistent across three parallel models.",
      ],
    },
    {
      title: "Backend Engineer",
      company: "IBORO - AI Chatbot for Companies",
      projectUrl: "https://www.iboroai.com",
      description: [
        "Built the secure Python/LangChain backend for IBORO, an AI chatbot that lets companies query their own documents instead of digging through files by hand. Still active work.",
        "Combined NLU and file processing to surface insights from sensitive crypto and financial data, with privacy as a first-class concern.",
        "Went through several rounds of testing to get the system reliable enough for production use.",
        "Cut down development time by building out reusable React components and tightening up the RESTful API.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Crypto/Forex Trading Bot",
      projectUrl: "#",
      description: [
        "Built a trading bot for crypto and forex analysis and prediction in about three months, leaning on rigorous testing to keep bugs down.",
        "Built the frontend in React to visualize predictions and give users a dashboard they could actually read.",
        "Built the backend in Node.js and Express for data analysis, API integrations, and real-time predictions.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Sentinel",
      projectUrl: "https://sentinel-tau-hazel.vercel.app/login",
      description: [
        "Shipped a full-stack web app in under two months by prototyping fast and iterating against a tight deadline.",
        "Led the frontend in React, building responsive, intuitive interfaces end to end.",
        "Built the backend APIs in Node.js and Express, including real-time data processing and secured endpoints.",
        "Designed and managed the PostgreSQL database behind it.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Green Treat Ltd",
      projectUrl: "https://greentreatltd.com/v2/",
      description: [
        "Built the web presence for an enterprise landscaping and civil construction company on WordPress, covering project portfolios, service catalogs, team pages, and client testimonials.",
        "Wired up WooCommerce for quote requests and handled SEO so the site could actually be found. Covers the company's golf course construction, irrigation, and wastewater work.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Ijebu Alare Association Chicago",
      projectUrl: "http://ijebualarechicago.com/",
      description: [
        "Built a community site for a Nigerian diaspora cultural organization in Chicago, with a member area, event calendar, cultural resources, and media galleries.",
        "Set up a custom WordPress theme with member authentication to support the community's engagement and cultural preservation work.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Hypertask",
      projectUrl: "https://hypertask.vercel.app",
      description: [
        "Built a full Web3 app with token deployment in about a month, compressing the timeline without cutting corners on security.",
        "Built the frontend in React with Tailwind CSS, and the backend in Node.js and Express to handle token interactions and decentralized features.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "SolMeme",
      projectUrl: "https://www.solme.me/",
      description: [
        "Built a DeFi platform for a Solana meme token with NFT minting, integrated with Raydium and Jupiter, plus a tokenomics dashboard and whitelist management.",
        "Designed the landing pages and roadmap visuals. The project launched on mainnet with an active trading community.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Dwello",
      projectUrl: "https://dwello-one.vercel.app",
      description: [
        "Built a decentralized real estate marketplace using blockchain for property tokenization and transparent transactions.",
        "Wrote the smart contracts for fractional ownership, wired up MetaMask, and built the UI for listing, browsing, and tracking investments.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Weeping Plebs (Copeville)",
      projectUrl: "https://www.weepingplebs.com/",
      description: [
        "Built the frontend for a Web3 gaming project, including wallet connections and a responsive, game-themed interface.",
      ],
    },
  ];

  const skills = {
    "AI/ML": [
      "LLMs",
      "LangChain",
      "LangGraph",
      "RAG Implementation",
      "Fine-tuning",
      "NLP",
      "Machine Learning",
      "Chatbots",
      "Document Processing",
    ],
    Backend: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "OOP",
    ],
    Frontend: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "TailwindCSS",
      "Bootstrap",
      "AJAX",
    ],
    Mobile: ["React Native", "NativeScript", "Android", "iOS"],
    Databases: ["SQL", "NoSQL", "PostgreSQL", "MySQL", "MongoDB"],
    "Cloud & DevOps": [
      "AWS",
      "Amazon EC2",
      "Amazon S3",
      "AWS CodePipeline",
      "Azure",
      "Docker",
      "Netlify",
      "CI/CD pipelines",
      "Git",
      "GitHub",
    ],
    CMS: ["WordPress", "WooCommerce"],
    Blockchain: ["Solidity", "Rust", "Smart Contracts"],
  };

  const RESUME_URL = "./Emmanuel-Nkereuwem-Fullstack.pdf";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="." style={{ textDecoration: 'none' }}>
              <img
                src="/stark.png"
                alt="Emmanuel Nkereuwem"
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/50"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["Home", "About", "Experience", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 hover:text-cyan-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {["Home", "About", "Experience", "Skills", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={activeSection === item.toLowerCase() ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-6 animate-fadeIn">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Emmanuel Nkereuwem
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">
              Founding Engineer & CTO
            </p>
            <p className="text-lg text-gray-400">
              I design and build the AI infrastructure that lets one platform
              serve many tenants safely, from the first commit to production.
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <a
              href="https://github.com/emmystark"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nkereuwems/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nkememmanuel5505@gmail.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href={RESUME_URL}
              download="Emmanuel-Nkereuwem-Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
            >
              <FileUser
                size={24}
                className="text-blue-400 group-hover:text-blue-300 transition-colors"
              />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mt-8 text-cyan-400"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex items-center px-6 py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founding engineer and CTO with hands-on ownership across the
              full stack, from RAG pipelines and multi-tenant infrastructure
              to security audits and production deployment. I currently
              serve as CTO and sole engineer at ProvidiusTech, a
              multi-tenant AI customer support platform recognized by the
              NVIDIA Inception program, and as technical co-founder at
              Beldium, a compliance and marketplace platform for Nigeria's
              solid minerals sector.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My work spans designing multilingual RAG systems supporting
              languages like Amharic and Tigrinya, building per-tenant
              security architecture with KMS envelope encryption, auditing
              and rebuilding infrastructure under real production
              constraints, and leading technical teams through complex data
              science work.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Background in mechatronics engineering, with an ongoing
              interest in IoT and voice assistant hardware.
            </p>

            <div className="mt-8 flex items-center gap-2 text-cyan-400">
              <GraduationCap size={20} />
              <span className="text-gray-300">
                Software Engineering - ALX Cohort 9 (Aug 2019 - Oct 2020)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Briefcase className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 text-lg mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>
                      {exp.projectUrl && exp.projectUrl !== "#" && (
                        <a
                          href={exp.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg transition-all duration-300 hover:scale-105 border border-cyan-500/30 hover:border-cyan-500/50"
                        >
                          <span className="text-sm font-medium">View Project</span>
                          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
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
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  {category === "Frontend" && <Code size={20} />}
                  {category === "Backend" && <Database size={20} />}
                  {category === "AI/ML" && <Zap size={20} />}
                  {category === "Cloud & DevOps" && <Cloud size={20} />}
                  {category === "Databases" && <Database size={20} />}
                  {category === "Mobile" && <Smartphone size={20} />}
                  {category === "CMS" && <Layout size={20} />}
                  {category === "Blockchain" && <Code size={20} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300"
                    >
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
      <section
        id="contact"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-3xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <div className="space-y-6">
              <a
                href="mailto:nkememmanuel5505@gmail.com"
                className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <Mail
                  className="group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span>Gmail</span>
              </a>

              <a
                href={RESUME_URL}
              download="Emmanuel-Nkereuwem-Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <FileUser
                  className="group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span>Resume</span>
                {/* <ExternalLink size={16} /> */}
              </a>
              <a
                href="https://github.com/emmystark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <Github
                  className="group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span>Github</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/emmanuel-nkereuwems/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <Linkedin
                  className="group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span>Linkedin</span>
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