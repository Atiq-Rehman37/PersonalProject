import { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onFinish }) => {
  const [text, setText] = useState("");

  const fullText = "Initializing Portfolio...";

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 70);

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="terminal">
        <h1 className="logo">&lt;Atiq Rehman /&gt;</h1>

        <p>
          $ {text}
          <span className="cursor">|</span>
        </p>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>

        <span className="status">Loading Projects • Skills • Experience</span>
      </div>
    </div>
  );
};

export default Preloader;
