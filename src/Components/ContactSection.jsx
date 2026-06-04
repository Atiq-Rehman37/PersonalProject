import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./ContactSection.css";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">— CONTACT US</p>

          <h2 className="section-title text-white">
            LET'S WORK <span>TOGETHER</span>
          </h2>

          <p className="contact-intro">
            Have a project idea, startup, business website, or AI solution in
            mind? Let's discuss how we can build it.
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="contact-card">
              <h4 className="mb-4">Get In Touch</h4>

              <div className="contact-item">
                <FaEnvelope />
                <span>atiq0046@gmail.com</span>
              </div>

              <div className="contact-item">
                <FaWhatsapp />
                <span>+92 342 7621056</span>
              </div>

              <div className="contact-item">
                <FaLocationPinLock />
                <span>Rawalpindi, Punjab, Pakistan</span>
              </div>

              <div className="contact-item">
                <FaLinkedinIn />
                <span>Atiq Rehman</span>
              </div>

              <div className="contact-item">
                <FaGithub />
                <span>Atiq-Rehman37</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control custom-input"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Project Subject"
                  className="form-control custom-input"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="form-control custom-input"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
