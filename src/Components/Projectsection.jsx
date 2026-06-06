import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projectsection.css";

const projects = [
  {
    category: "MERN STACK + AI",
    title: "AI Virtual Assistant (In Progress)",
    features: [
      "Voice-based interaction",
      "Task assistance & automation",
      "Web search integration",
    ],
    tech: ["React", "Node.js", "Speech Recognition"],
    live: "#",
    github: "#",
  },
  {
    category: "AI TOOL",
    title: "AI Powered Code Reviewer",
    features: [
      "Code quality analysis",
      "Bug detection suggestions",
      "AI code explanations",
    ],
    tech: ["React", "OpenAI API"],
    live: "https://github.com/Atiq-Rehman37/AI-Powered-Code-Reviewer",
    github: "https://github.com/Atiq-Rehman37/AI-Powered-Code-Reviewer",
  },
  {
    category: "MEDIA SEARCH APP",
    title: "MediaVault",
    features: [
      "Search high-quality images and media",
      "Real-time API-powered search results",
      "Category-based media browsing",
    ],
    tech: ["Redux Toolkit", "Pexels API", "Shutterstock API"],
    live: "https://github.com/Atiq-Rehman37/MediaVault-MediaSearch-",
    github: "https://github.com/Atiq-Rehman37/MediaVault-MediaSearch-",
  },
  {
    category: "WEB APPLICATION",
    title: "E-Commerce Store",
    features: [
      "Product listing system",
      "Shopping cart functionality",
      "User authentication",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://github.com/Atiq-Rehman37/WebProject-Full-Stack",
    github: "https://github.com/Atiq-Rehman37/WebProject-Full-Stack",
  },
  {
    category: "BUSINESS WEB APP",
    title: "Pure Aqua Plus",
    features: [
      "Water service booking system",
      "Product catalog",
      "Order management",
    ],
    tech: ["React", "Bootstrap 5"],
    live: "https://pureaquaplus.net/",
    github: "https://github.com/Atiq-Rehman37/Pure-Aqua-Plus",
  },
  // {
  //   category: "WEB APPLICATION",
  //   title: "Weather Forecast App",
  //   features: [
  //     "Real-time weather updates",
  //     "7-day forecast",
  //     "Location-based search",
  //   ],
  //   tech: ["React", "Weather API", "Geolocation"],
  //   live: "https://github.com/Atiq-Rehman37/WeatherApp",
  //   github: "https://github.com/Atiq-Rehman37/WeatherApp",
  // },
  {
    category: "PORTFOLIO WEBSITE",
    title: "Personal Portfolio",
    features: [
      "Responsive modern UI",
      "Projects showcase section",
      "Contact form integration",
    ],
    tech: ["React", "Bootstrap 5", "Framer Motion"],
    live: "https://atiqdev.netlify.app/",
    github: "https://github.com/Atiq-Rehman37/PersonalProject",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section py-5" id="projects">
      <div className="container">
        <div className="text-center mb-4">
          <p className="section-subtitle">— PORTFOLIO</p>

          <h2 className="section-title text-white">
            PROJECTS TO <span>EXPLORE</span>
          </h2>

          <p className="text-secondary-custom">
            Selected projects showcasing my MERN Stack and AI development
            skills.
          </p>
        </div>

        <div className="row g-3">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="portfolio-card h-100">
                <div className="project-top"></div>

                <div className="p-3">
                  <small className="project-category">{project.category}</small>

                  <h5 className="mt-2 mb-2 text-white">{project.title}</h5>

                  <ul className="project-features small">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-1 mt-2">
                    {project.tech.map((item, i) => (
                      <span className="tech-badge small" key={i}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 d-flex gap-2">
                    <a href={project.live} className="project-btn">
                      <FaExternalLinkAlt />
                      Live
                    </a>

                    <a href={project.github} className="project-btn-outline">
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
