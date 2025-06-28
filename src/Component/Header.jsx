

import React from 'react'
import ProjectSection from './Project';

const Header = () => {

  const newdate = new Date();
  const localTime = newdate.toLocaleTimeString();
  const localDate = newdate.toLocaleDateString()

  return (
    <header className=' container mt-1 mb-4 grid grid-cols-3 sticky top-0  bg-slate-100 overflow-x-hidden shadow-md shadow-slate-500 z-10'>
      <div>
        <img  className='w-32 h-32 border-8 m-1 border-black  rounded-full ' src="/Images/profile.jpg" alt="Profile Picture" />
      </div>
       <div className=''>
          <h1 className='logo mt-2 text-5xl md:text-6xl lg:text-7xl   font-serif font-bold'>
          AS ASA      
          </h1>

          <h1 className='inline-block m-2 p-2 font-mono font-semibold '>
            {localTime}
          </h1>

          <h1 className='inline-block m-2 p-2 font-mono font-semibold '>
            {localDate}
          </h1>
       </div>


     <div className=''>
       <div>
         {/* Menu (Desktop)  */}
          <nav class="hidden md:flex space-x-8 text-gray-700 font-bold mt-5">
            <a href="#about" class="hover:text-blue-600">About</a>
            <a href={<ProjectSection/>} class="hover:text-blue-600">Projects</a>
            <a href="#skills" class="hover:text-blue-600">Skills</a>
            <a href="#contact" class="hover:text-blue-600">Contact</a>
          </nav>

            {/* Mobile Menu Button  */}
            <div class="md:hidden">
              <button id="menu-toggle" class="text-gray-700 text-2xl focus:outline-none">
                ☰
              </button>
            </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div  id="mobile-menu" class="md:hidden hidden px-6 pb-4">
          <a href="#about" class="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" class="block py-2 text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#skills" class="block py-2 text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#contact" class="block py-2 text-gray-700 hover:text-blue-600">Contact</a>        
        </div>
      </div>
    </header>
  )
}

export default Header