import { FaCode, FaRobot, FaDatabase, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Servicescard.css";

const services = [
  {
    icon: <FaCode size={40} />,
    title: "Full Stack Web Development",
    text: "Custom web applications built with React, Node.js, Express, and MongoDB, focused on performance, scalability, and modern user experiences.",
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Web Solutions",
    text: "AI-powered applications, automation tools, intelligent dashboards, chat systems, and business solutions designed to improve productivity.",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Database Design",
    text: "Designing secure and efficient MongoDB and SQL database structures that support scalable applications and business growth.",
  },
  {
    icon: <FaServer size={40} />,
    title: "REST API Development",
    text: "Building secure, fast, and scalable APIs with authentication, authorization, data validation, and third-party integrations.",
  },
];

const Servicescard = () => {
  return (
    <section className="services-section py-5" id="services">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">— SERVICES</p>

          <h2 className="section-title text-white">
            WHAT I <span>OFFER</span>
          </h2>

          <p className="text-secondary-custom">
            Professional development services focused on modern web applications
            and AI-powered solutions.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <motion.div
                className="service-card h-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="service-icon">{service.icon}</div>

                <h5>{service.title}</h5>

                <p>{service.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicescard;
