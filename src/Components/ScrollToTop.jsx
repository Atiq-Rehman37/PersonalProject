import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { HiArrowLongUp } from "react-icons/hi2";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top-btn ${visible ? "show" : ""}`}
      onClick={scrollTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
