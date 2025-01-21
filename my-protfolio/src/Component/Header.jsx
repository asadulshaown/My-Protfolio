import React from 'react'

const Header = () => {

  const date =  Date();
  const newdate = new Date();
  const localTime = newdate.toLocaleTimeString();
  const localDate = newdate.toLocaleDateString()


  return (
    <header className='mt-1 mb-4 grid grid-cols-3 sticky top-0  bg-slate-100 overflow-x-hidden shadow-md shadow-slate-500'>
      <img  className='w-32 h-32 border-8 m-1 border-black  rounded-full ' src="profile.jpg" alt="" />
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
      <ul className='inline-block font-bold font-serif overflow-auto mt-5'>
        <li className='text-green-700 m-3 inline border-b-2 border-b-green-700 hover:border-green-500 hover:text-green-500 hover:transition cursor-pointer'>HOME</li>
        <li className='text-green-700 m-3 inline border-b-2 border-b-green-700 hover:border-green-500 hover:text-green-500 hover:transition cursor-pointer'>SKILL</li>
        <li className='text-green-700 m-3 inline border-b-2 border-b-green-700 hover:border-green-500 hover:text-green-500 hover:transition cursor-pointer'>KNOWLEDGE</li>
        <li className='text-green-700 m-3 inline border-b-2 border-b-green-700 hover:border-green-500 hover:text-green-500 hover:transition cursor-pointer'>PROJECT</li>
        <li className='text-green-700 m-3 inline border-b-2 border-b-green-700 hover:border-green-500 hover:text-green-500 hover:transition cursor-pointer'>CONTACT</li>
      </ul>
      
        
    </header>
  )
}

export default Header