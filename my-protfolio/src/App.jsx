
import React from "react"
import Header from "./Component/Header"
import './App.css';
import HeroSecetion from "./Component/HeroSection";
import Skill from "./Component/Skill";
import Knowledge from "./Component/Knowledge";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  

  return (
   <div className="bg-slate-200 select-none">
    <Header />
    <HeroSecetion />
    <Skill/>
    <Knowledge/>
    <Project/>
    <Contact/>
    <Footer/>
    <button className='text-3xl font-bold border-4 border-white border-r-green-500 p-3 fixed top-96 right-1 bg-green-500 text-red-600'>
          ^
          </button>
    
   </div>
  )
}

export default App
