
import React from "react"
import { useEffect } from "react";
import './App.css';
import Header from "./Component/Header"
import HeroSection from "./Component/HeroSection";
import Skill from "./Component/Skill";
import Knowledge from "./Component/Knowledge";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
//import UpDownButton from "./Component/upDownButton";

import AOS from 'aos'; // import AOS Animation
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
  AOS.init({ duration: 2500 });
  }, []);// use AOS for animation

  return (
   <div className=" bg-slate-200 select-none ">
    <Header />
    <HeroSection />
    <Skill />
    <Knowledge />
    <Project /> 
    <Footer />
    <Contact />
    {/* <UpDownButton /> */}
    
   </div>
  )
}

export default App
