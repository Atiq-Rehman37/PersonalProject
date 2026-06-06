import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import Preloader from "./Components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <ScrollToTop />
      <Footer />
    </Router>
  );
};

export default App;
