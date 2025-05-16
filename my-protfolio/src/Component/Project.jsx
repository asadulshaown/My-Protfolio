import React from 'react'

const Project = () => {
  return (
    <div className='bg-red-500 mt-10 text-lime-50 text-center grid grid-flow-row'>
        <h1 className='mt-4 font-serif font-semibold text-3xl text-emerald-400 uppercase inline-block '>
          Project Code 
        </h1>
        <div className='grid grid-cols-3'>
          <div className='m-2 hover:scale-110 transition duration-500'>
            <img src='../public/Images/code1.png'>
             </img>
          </div>
          <div className='m-2 project_div'>
            <img src='../public/Images/code2.png'>
             </img>
          </div>
          <div className='m-2 project_div'>
            <img src='../public/Images/code3.png'>
             </img>
          </div>
          <div className='m-2 project_div'>
            <img src='../public/Images/code1.png'>
             </img>
          </div>
          <div className='m-2 project_div'>
            <img src='../public/Images/code2.png'>
             </img>
          </div>
          <div className='m-2 project_div'>
            <img src='../public/Images/code2.png'>
             </img>
          </div>

        </div>
    </div>
  )
}

export default Project