

import React from 'react'
import Knowledge from './Knowledge';

const Header = () => {

  const newdate = new Date();
  const localTime = newdate.toLocaleTimeString();
  const localDate = newdate.toLocaleDateString()


  return (
    <header className=' container mt-1 mb-4 grid grid-cols-3 sticky top-0  bg-slate-100 overflow-x-hidden shadow-md shadow-slate-500 z-10'>
      <img  className='w-32 h-32 border-8 m-1 border-black  rounded-full ' src="/public/Images/profile.jpg" alt="Profile Picture" />
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

       <div >
        <ul className=' inline-flex gap-4 mt-3 font-serif font-semibold'>
           <li><a href="###" className=' inline-block border-b-2 border-b-green-900 hover:text-green-500 hover:border-b-slate-400'> Contract</a></li>
          <li><a href="" className=' inline-block border-b-2 border-b-green-900  hover:text-green-500 hover:border-b-slate-400' > Knowledge</a></li>
          <li><a href="./Skill.jsx" className=' inline-block border-b-2 border-b-green-900  hover:text-green-500 hover:border-b-slate-400'> Skill</a></li>
          <li><a href="./Project.jsx" className=' inline-block border-b-2 border-b-green-900  hover:text-green-500 hover:border-b-slate-400'> Project</a></li>
        </ul>
        
       </div>

      
    </header>
  )
}

export default Header