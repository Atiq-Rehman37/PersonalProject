import React from "react";
import Herosection from "../Components/Herosection";
import Aboutsection from "../Components/Aboutsection";
import Techstack from "../Components/Techstack";
import ProjectSection from "../Components/Projectsection";
import Servicescard from "../Components/Servicescard";
import HireSection from "../Components/HireSection";
import ContactSection from "../Components/ContactSection";

const Home = () => {
  return (
    <div>
      <Herosection></Herosection>
      <Aboutsection></Aboutsection>
      <Techstack></Techstack>
      <ProjectSection></ProjectSection>
      <Servicescard></Servicescard>
      <HireSection></HireSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
