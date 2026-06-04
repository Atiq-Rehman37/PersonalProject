import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import "./Techstack.css";

const technologies = [
  { Icon: FaReact, label: "React.js" },
  { Icon: FaNodeJs, label: "Node.js" },
  { Icon: SiExpress, label: "Express.js" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: FaJs, label: "JavaScript" },
  { Icon: FaBootstrap, label: "Bootstrap" },
  { Icon: FaGitAlt, label: "Git" },
  { Icon: FaGithub, label: "GitHub" },
];

const TechStack = () => {
  return (
    <section className="tech-section py-5" id="skills">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">— TECH STACK</p>

          <h2 className="section-title">
            TOOLS & <span>TECHNOLOGIES</span>
          </h2>

          <p className="text-secondary-custom">
            Technologies I use to build modern web applications and AI-powered
            solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="row g-4">
          {technologies.map(({ Icon, label }, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <motion.div
                className="tech-card h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
              >
                <Icon size={40} className="tech-icon" />

                <h6 className="mt-3 mb-0">{label}</h6>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
