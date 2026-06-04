import { TypeAnimation } from "react-type-animation";
import { FaCircle, FaDownload } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Herosection.css";

const Herosection = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { num: "10+", label: "Projects Completed" },
    { num: "12+", label: "Technologies" },
    { num: "5+", label: "Client Satisfaction" },
    { num: "1+", label: "Years Learning" },
  ];

  return (
    <section
      className="herosection text-white py-5"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <motion.div
            className="col-lg-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h5
              className="text-uppercase text-white-50 mb-3 d-flex justify-content-center align-items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaCircle size={12} color="#00ff88" />
              Welcome To My Portfolio
            </motion.h5>

            <motion.h1
              className="fw-bold display-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm{" "}
              <span className="highlighted-name">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "AI Web Solutions Expert",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "React & Node.js Specialist",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p
              className="lead text-white-50 mb-5 hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I build modern, scalable, and intelligent web applications using
              the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js,
              Node.js). I also develop AI-powered web solutions, dashboards,
              e-commerce platforms, automation systems, and custom business
              applications.
            </motion.p>

            <motion.div
              className="d-flex justify-content-center gap-3 flex-wrap mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#projects" className="btn btn-danger px-4 py-2">
                View Projects
              </a>

              <a
                href="/Atiq_Rehman MERN Stack Developer.pdf"
                className="btn btn-outline-light px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="me-2" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              ref={ref}
              className="stats-section py-4 px-3 rounded-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="row g-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-6 col-md-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="fw-bold text-danger">{item.num}</h3>
                    <p className="mb-0 text-white-50 small">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
