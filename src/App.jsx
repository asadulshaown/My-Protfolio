
import React from "react"
import { useEffect } from "react";
import './App.css';
import Header from "./Component/Header"
import HeroSection from "./Component/HeroSection";
import Skill from "./Component/Skill";
import Knowledge from "./Component/Knowledge";
import ProjectCode from "./Component/ProjectCode";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import ProjectSection from "./Component/Project";


import AOS from 'aos'; // import AOS Animation
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
  AOS.init({ duration: 2000 });
  }, []);// use AOS for animation

  return (
   <div className=" bg-slate-200 select-none ">
    <Header />
    <HeroSection />
    <Skill />
    <Knowledge />
    <ProjectSection/>
    <ProjectCode /> 
    <Footer />
    <Contact />
    
    
   </div>
  )
}

export default App
