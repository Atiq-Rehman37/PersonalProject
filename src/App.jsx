import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default App;
