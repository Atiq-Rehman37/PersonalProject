import React from "react";
import { motion } from "framer-motion";
import "./Aboutsection.css";
const Aboutsection = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">— ABOUT ME</p>

          <h2 className="section-title">
            MERN STACK <span>DEVELOPER</span>
          </h2>

          <p className="about-intro">
            Building scalable web applications and AI-powered solutions that
            deliver real business value.
          </p>
        </motion.div>

        <div className="row align-items-center g-5">
          {/* Image */}
          <motion.div
            className="col-lg-4 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/ProfileImage.png"
              alt="Atiq Rehman"
              className="img-fluid about-image"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="about-role">
              Hi, I'm <span>Atiq Rehman</span>
            </h3>

            <p>
              I'm a passionate MERN Stack Developer specializing in React.js,
              Node.js, Express.js, and MongoDB. I enjoy creating modern web
              applications that are fast, scalable, and user-focused.
            </p>

            <p>
              Along with full-stack development, I build AI-powered web
              solutions, automation tools, dashboards, e-commerce platforms, and
              custom business systems.
            </p>

            {/* Skills */}
            <div className="skills-wrapper">
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express.js</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">REST API</span>
              <span className="skill-badge">Bootstrap</span>
              <span className="skill-badge">GitHub</span>
              <span className="skill-badge">AI Integration</span>
              <span className="skill-badge">Git</span>
              <span className="skill-badge">Postman</span>
              <span className="skill-badge">MySQL</span>
              <span className="skill-badge">HTML5 / CSS3</span>
              <span className="skill-badge">OpenAI</span>
            </div>

            {/* Stats */}
            {/* <div className="row mt-4">
              <div className="col-md-3 col-6 mb-3">
                <div className="about-card">
                  <h3>20+</h3>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-md-3 col-6 mb-3">
                <div className="about-card">
                  <h3>10+</h3>
                  <p>Technologies</p>
                </div>
              </div>

              <div className="col-md-3 col-6 mb-3">
                <div className="about-card">
                  <h3>2+</h3>
                  <p>Years Learning</p>
                </div>
              </div>

              <div className="col-md-3 col-6 mb-3">
                <div className="about-card">
                  <h3>100%</h3>
                  <p>Dedication</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
