import React from "react";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      href: "tel:+923427621056",
      Icon: FaPhoneAlt,
    },
    {
      href: "https://github.com/Atiq-Rehman37",
      Icon: FaGithub,
    },
    {
      href: "https://www.linkedin.com/in/atiq-rehman-react-developer/",
      Icon: FaLinkedinIn,
    },
    {
      href: "https://wa.me/923427621056",
      Icon: FaWhatsapp,
    },
    {
      href: "mailto:atiq0046@gmail.com",
      Icon: FaEnvelope,
    },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-logo">
            Atiq<span>Rehman</span>
          </h2>

          <p className="footer-text">
            MERN Stack Developer specializing in modern web applications,
            AI-powered solutions, REST APIs, and scalable business systems.
          </p>

          <div className="social-links">
            {socialLinks.map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="footer-divider"></div>

          <p className="copyright">
            © 2026 Atiq Rehman. Built with React.js, Bootstrap & MERN Stack
            Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
