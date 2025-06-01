  import React from 'react'

  const Skill = () => {
    return (
      <>
      
      <div className='container bg-slate-300 mt-10  shadow shadow-gray-950 text-cyan-50 '>
        <h1 className='inline-block text-center font-bold font-serif text-green-950 text-3xl m-10 '>
          Skill Is Combination Of Knowledge And Smart Working Over The Time optimaiztion
        </h1>
        <div className=' grid grid-cols-2'>
          <ol className=' inline-block m-8  text-2xl font-serif text-black skill_list' data-aos="zoom-in-down">
            <li >Teaching</li>
            <li>Computer operating</li>
            <li>Computer Expolorer</li>
            <li>IT Supourt</li>
            <li>Web Development</li>
          </ol> 

          <ol className=' inline-block m-8  text-2xl font-serif text-black skill_list' data-aos="zoom-in-down">
            <li className=''>Teaching</li>
            <li>Computer operating</li>
            <li>Computer Expolorer</li>
            <li>IT Supourt</li>
            <li>Web Development</li>
          </ol> 
        </div>
      
      </div>
      </>
    )
  }

  export default Skill