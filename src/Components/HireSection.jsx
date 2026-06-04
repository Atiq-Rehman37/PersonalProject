import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import "./HireSection.css";

const HireSection = () => {
  return (
    <section className="hire-section py-5" id="hireme">
      <div className="container">
        <motion.div
          className="hire-card text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle mb-3">— LET'S WORK TOGETHER</p>

          <h2 className="hire-title">
            Ready To Build Your Next
            <span> Digital Solution?</span>
          </h2>

          <p className="hire-text">
            Whether you need a MERN Stack application, AI-powered solution,
            business dashboard, e-commerce platform, or custom web system, I'm
            ready to help bring your ideas to life.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
            <a href="#contact" className="btn-primary-custom">
              Start a Project
              <FaArrowRight className="ms-2" />
            </a>

            <a
              href="https://wa.me/923427621056"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-custom text-decoration-none text-white d-flex align-items-center"
            >
              <FaWhatsapp className="me-2" size={20} />
              WhatsApp Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireSection;
